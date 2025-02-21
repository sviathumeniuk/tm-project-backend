const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now,
        required: true
    },

    paymentStatus: {
        type: String,
        required: true
    },

    paymentMethod: {
        type: String,
        required: true
    },

    notes: {
        type: String,
        default: ''
    }
});

const Payment = mongoose.model('Payment', PaymentSchema);
module.exports = Payment;