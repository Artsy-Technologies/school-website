import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    parentName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    studentName: {
        type: String,
        required: true
    },
    studentAge: {
        type: Number,
        required: true
    },
    programIntrest: {
        type: "String",
        required: true
    },
    message: {
        type: "String",
        required: true
    }
})

const Student = mongoose.model('Student',studentSchema);

export default Student;