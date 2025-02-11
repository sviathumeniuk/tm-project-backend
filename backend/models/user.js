const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Your username is required"],
    },

    password: {
        type: String,
        required: [true, "Your password is required"],
    },

    role: {
        type: String,
        required: [true, "Your role is required"],
    },

    email: {
        type: String,
        required: [true, "Your email is required"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address'],
    }
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;