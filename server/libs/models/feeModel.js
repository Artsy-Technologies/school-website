const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
    programName: {
        type: "String",
        required: true
    },
    ageGroup: {
        type: Number,
        required: true
    },
    annualFee: {
        type: Number,
        required: true
    },
    registrationFee: {
        type: Number,
        required: true
    },
    activityFee: {
        type: Number,
        required: true
    }

})

const fee = mongoose.model('fee', feeSchema);

module.exports = fee;