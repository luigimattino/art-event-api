const Event = require('../models/Events');

exports.ongoing_event_list = (req, res) => {
    const city = req.query.city;
    const locString = req.query.location;
    const genre = req.query.genre;
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
    if (genre) {
        andQuery.push({ genres: genre });
    }
    if (locString) {
        andQuery.push({ location: { $regex: '.*' + locString + '.*' } });
    }
    query['$and'] = andQuery;
    Event.find(query, 'title city openingDate closingDate location address genres artists').then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
            message:
                err.message || "Some error occurred while retrieving omgoing events."
        });
    });
};

exports.get_event_detail = (req, res) => {
    Event.findById(req.params.id, '-srcurl').then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
            message:
                err.message || "Some error occurred while retrieving omgoing events."
        });
    });
};

exports.get_cities = (req, res) => {
    Event.find({}, 'city -_id').then(data => {
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

exports.get_genres = (req, res) => {
    Event.find({}, 'genres -_id').then(data => {
        const genres = data.reduce((set, e) => {
            e.genres.forEach((genre) => set.add(genre));
            return set;
        }, new Set());
        res.json(Array.from(genres));
    })
        .catch(err => {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while retrieving all locations."
            });
        });
};

exports.get_locations = (req, res) => {
    Event.find({}, 'location -_id').then(data => {
        const locations = data.reduce((set, e) => {
            set.add(e.location);
            return set;
        }, new Set());
        res.json(Array.from(locations));
    })
        .catch(err => {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while retrieving all locations."
            });
        });
};