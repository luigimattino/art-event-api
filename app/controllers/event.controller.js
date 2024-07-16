const Event = require('../models/Events');

exports.ongoing_event_list = (req, res) => {
    const city = req.query.city;
    const locString = req.query.location;
    const genre = req.query.genre;
    const language = req.query.lang || 'it';  // Default to Italian if no language is specified
    const now = new Date();
    let query = { $and: [] };
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

    // Include language specifier in the fields to return
    Event.find(query, `title.${language} city openingDate closingDate location address genres artists`)
    .then(data => {
        const formattedData = data.map(event => ({
            ...event._doc,
            title: event.title[language]  // Adjust title to show only the requested language
        }));
        res.status(200).json(formattedData);
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving ongoing events."
        });
    });
};

exports.get_event_detail = (req, res) => {
    const language = req.query.lang || 'it';  // Default to Italian if no language is specified
    Event.findById(req.params.id, '-srcurl').then(data => {
        const formattedData = {
            ...data._doc,
            title: data.title[language],  // Adjust title to show only the requested language
            description: data.description[language],  // Adjust description to show only the requested language
            press: data.press[language],  // Adjust press to show only the requested language
            dates: data.dates[language],  // Adjust dates to show only the requested language
            opening: data.opening[language],  // Adjust opening to show only the requested language
        };
        res.status(200).json(formattedData);
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

exports.random_event_list = (req, res) => {
    const language = req.query.lang || 'it';  // Default to Italian if no language is specified
    Event.aggregate([{ $sample: { size: 1 } }]).then(data => {
        const formattedData = data.map(event => ({
            ...event,
            title: event.title[language],  // Adjust title to show only the requested language
            description: event.description[language],  // Adjust description to show only the requested language
            press: event.press[language],  // Adjust press to show only the requested language
            dates: event.dates[language],  // Adjust dates to show only the requested language
            opening: event.opening[language],  // Adjust title to show only the requested language
        }));
        res.status(200).json(formattedData);
    }).catch(err => {
        res.status(500).json({
            message:
                err.message || "Some error occurred while retrieving random events."
        });
    });
};