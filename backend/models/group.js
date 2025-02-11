const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    speciality: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    numberOfStudents: {
        type: Number,
        required: true
    },
    
    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    }
});

const Group = mongoose.model('Group', GroupSchema);
module.exports = Group;