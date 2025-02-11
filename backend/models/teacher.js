const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    patronymic: {
        type: String,
        default: ''
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address'],
    },

    phone: {
        type: String,
        required: true,
        unique: true,
        match: [/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d- ]{7,10}$/, 'Please fill a valid phone number']
    },

    experience: {
        type: Number,
        required: true
    }
});

const Teacher = mongoose.model('Teacher', TeacherSchema);
module.exports = Teacher;