const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },

    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },

    totalHours: {
        type: Number,
        required: true
    },

    payment: {
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

const Report = mongoose.model('Report', ReportSchema);
module.exports = Report;