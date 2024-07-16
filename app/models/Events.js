const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    _id: { type: String, default: uuidv4},
    title: {
        it: { type: String },
        en: { type: String },
        zh: { type: String },
        // additional languages as needed
    },
    city: { type: String },
    openingDate: { type: Date },
    closingDate: { type: Date },
    description: {
        it: { type: String },
        en: { type: String },
        zh: { type: String },
        // additional languages as needed
    },
    press: {
        it: { type: String },
        en: { type: String },
        zh: { type: String },
        // additional languages as needed
    },
    location: { type: String },
    address: { type: String },
    dates: {
        it: { type: String },
        en: { type: String },
        zh: { type: String },
        // additional languages as needed
    },
    opening: {
        it: { type: String },
        en: { type: String },
        zh: { type: String },
        // additional languages as needed
    },
    hours: { type: String },
    phone: { type: String },
    email: { type: String },
    website: { type: String },
    pressoffices: { type: String },
    patronages: { type: String },
    publishers: { type: String },
    tickets: { type: String },
    genres: [ String ],
    artists: [ String ],
    editors: [ String ],
    srcurl: [ String ],
});
eventSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model('Event', eventSchema);