const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true],
    },

    password: {
        type: String,
        required: [true],
    },

    role: {
        type: String,
        required: [true],
    },

    email: {
        type: String,
        required: [true],
        unique: true,
        match: [/^\S+@\S+\.\S+$/],
    }
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;