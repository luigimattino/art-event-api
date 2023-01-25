const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    _id: { type: String, default: uuidv4 },
    title: { type: String },
    city: { type: String },
    openingDate: { type: Date },
    closingDate: { type: Date },
    description: { type: String },
    press: { type: String },
    location: { type: String },
    address: { type: String },
    dates: { type: String },
    opening: { type: String },
    hours: { type: String },
    phone: { type: String },
    email: { type: String },
    website: { type: String },
    pressoffices: { type: String },
    patronages: { type: String },
    publishers: { type: String },
    tickets: { type: String },
    genres: [String],
    artists: [String],
    editors: [String],
    srcurl: [String],
});
eventSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model('Event', eventSchema);