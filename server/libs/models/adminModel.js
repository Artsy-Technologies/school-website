const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: Boolean,
});

const admin = mongoose.model("admin", adminSchema);
module.exports = admin
