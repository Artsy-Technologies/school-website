import mongoose from 'mongoose'

const feeSchema = new mongoose.Schema({
  programName: {
    type: String, // Changed "String" to String
    required: true,
  },
  ageGroup: {
    type: String,
    required: true,
  },
  annualFee: {
    type: Number,
    required: true,
  },
  registrationFee: {
    type: Number,
    required: true,
  },
  activityFee: {
    type: Number,
    required: true,
  },
})

const Fee = mongoose.model('Fee', feeSchema)

export default Fee
