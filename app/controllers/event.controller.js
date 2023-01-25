const Event = require('../models/Events');

exports.ongoing_event_list = (req, res) => {
    const city = req.query.city;
    const now = new Date();
    let query = {
        $and: []
    };
    const andQuery = [
        { openingDate: { $lte: now } },
        { closingDate: { $gte: now } }
    ];
    if (city) {
        andQuery.push({ city: city });
    }
    query['$and'] = andQuery; 
    Event.find(query,'title city openingDate closingDate location address').then(data => {
        res.json(data);
    })
        .catch(err => {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while retrieving omgoing events."
            });
        });
};

exports.get_cities = (req, res) => {
    Event.find({},'city -_id').then(data => {
        const cities = data.reduce((set, e) => {
            set.add(e.city);
            return set;
        }, new Set());
        res.json(Array.from(cities));
    })
        .catch(err => {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while retrieving all cities."
            });
        });
};