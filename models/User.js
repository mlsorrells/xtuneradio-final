const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  role: { type: String, enum: ['manager', 'producer', 'dj'], required: true },
});

module.exports = mongoose.model('User', UserSchema);
