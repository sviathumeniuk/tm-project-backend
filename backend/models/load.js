const mongoose = require('mongoose');

const LoadSchema = new mongoose.Schema({
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

    subject: {
        type: String,
        required: true
    },

    hours: {
        type: Number,
        required: true
    },

    typeOfClass: {
        type: String,
        required: true
    },

    paymentPerHour: {
        type: Number,
        required: true
    }
});

const Load = mongoose.model('Load', LoadSchema);
module.exports = Load;