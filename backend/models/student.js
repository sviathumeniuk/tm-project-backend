const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
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
        match: [/^\S+@\S+\.\S+$/],
    },

    phone: {
        type: String,
        required: true,
        unique: true,
        match: [/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d- ]{7,10}$/]
    },

    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },

    status: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;