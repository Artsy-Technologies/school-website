import mongoose from 'mongoose'

const admissionSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: "String",
        required: true
    },
    prevSchool: {
        type: "String",
        required: true
    },
    grade: {
        type: "String",
        required: true
    },
    comments: {
        type: "String",
        required: true
    }
})

const Admission = mongoose.model('Admission',admissionSchema);

export default Admission;