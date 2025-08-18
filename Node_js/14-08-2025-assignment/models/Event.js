const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timeStamps = require('mongoose-timestamps');
const eventSchema = new Schema({
    "eventId": { type: Number, required:true },
    "eventName": { type: String, required:true },
    "eventType": { type: String, required:true },
    "place": { type: String, required:true},
    "noOfDays": { type: Number, required:true},
    "orgBy": { type: String, required: true },
    createdAt: Date,
    updatedAt: Date,
})
eventSchema.plugin(timeStamps, { index: true })
module.exports = mongoose.model('Event', eventSchema);