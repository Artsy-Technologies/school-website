import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: Boolean,
})

const Admin = mongoose.model('Admin', adminSchema)

export default Admin
