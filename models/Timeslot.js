const mongoose = require('mongoose');

const TimeslotSchema = new mongoose.Schema({
  day: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  assignedDJ: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  songs: [{ type: String }], // Song IDs or titles
});

module.exports = mongoose.model('Timeslot', TimeslotSchema);
