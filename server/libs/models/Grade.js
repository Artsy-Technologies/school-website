// libs/models/Grade.js
import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema({
  grade: {
    type: String,
    required: true,
  },
  pdfName: {
    type: String,
    required: true,
  },
  pdfPath: {
    type: String,
    required: true,
  },
});

const Grade = mongoose.model('Grade', gradeSchema);

export default Grade;
