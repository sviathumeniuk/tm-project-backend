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
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },

    phone: {
        type: String,
        required: true,
        unique: true,
        match: /^[+]?[0-9]{1,4}?[-.\s]?[0-9]{1,15}$/
    },

    experience: {
        type: Number,
        required: true
    }
});

const Teacher = mongoose.model('Teacher', TeacherSchema);
module.exports = Teacher;