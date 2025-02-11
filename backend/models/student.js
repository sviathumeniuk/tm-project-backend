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
        match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address'],
    },

    phone: {
        type: String,
        required: true,
        unique: true,
        match: [/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d- ]{7,10}$/, 'Please fill a valid phone number']
    },

    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },

    status: {
        type: String,
        enum: ['enrolled' ,'active', 'graduated'],
        required: true
    }
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;