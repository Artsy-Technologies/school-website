import admin from '../libs/models/adminModel.js'
import jwt from 'jsonwebtoken'
import fee from '../libs/models/feeModel.js'

const adminToken = process.env.ADMIN_TOKEN;

const signUp = async (req, res) => {
  try {
    const { email, password, token } = req.body

    if (!email || !password || !token) throw new Error('fields are missing')

    if (token !== adminToken) throw new Error('admin token is wrong')

    const isEmail = await admin.findOne({ email })

    if (isEmail) throw new Error('this email already exits')

    const newAdmin = await admin.create({
      email,
      password,
      isAdmin: true,
    })

    return res.json({
      status: 200,
      message: 'admin is created successfully',
      newAdmin,
    })
  } catch (error) {
    return res.json({
      status: 500,
      message: error.message,
    })
  }
}

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) throw new Error('fields are missing')

    const isAdmin = await admin.findOne({ email })

    if (!isAdmin) throw new Error('admin is not found')

    if (password !== isAdmin.password)
      throw new Error('please fill the correct password')

    const tokenData = { isAdmin }
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: '1d',
    })

    res.cookie('token', token, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      sameSite: 'None',
      secure: true,
      httpOnly: true,
    })

    return res.json({
      status: 200,
      message: 'admin login successfully',
      token,
    })
  } catch (error) {
    return res.json({
      status: 500,
      message: error.message,
    })
  }
}

const getAllFees = async (req, res) => {
  try {
    const programs = await fee.find()

    return res.json({
      message: 'Programs retrieved successfully',
      status: 200,
      data: programs,
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: 500,
    })
  }
}

const createFeeTable = async (req, res) => {
  try {
    if (req.isAdmin === false) throw new Error('not authenticated')
    const { programName, ageGroup, annualFee, registrationFee, activityFee } =
      req.body
    if (
      !programName ||
      !ageGroup ||
      !annualFee ||
      !registrationFee ||
      !activityFee
    )
      throw new Error('fields are missing please fill all the fields carefully')

    const newprogram = await fee.create({
      programName,
      ageGroup,
      annualFee,
      registrationFee,
      activityFee,
    })
    if (!newprogram) {
      throw new Error('something went wrong during the creation')
    }
    return res.json({
      message: 'created new program successfully',
      status: 200,
    })
  } catch (error) {
    return res.json({
      message: error.message,
      status: 500,
    })
  }
}

const updateFeeTable = async (req, res) => {
  try {
    if (req.isAdmin === false) throw new Error('not authenticated')

    const { programName, ageGroup, annualFee, registrationFee, activityFee } =
      req.body

    if (!programName) throw new Error('program name is required')

    if (!ageGroup && !annualFee && !registrationFee && !activityFee)
      throw new Error('at least one field must be provided to update')

    // ************************************* creating an object for updating the data ******************************************* //

    const updateData = {}
    if (ageGroup) updateData.ageGroup = ageGroup
    if (annualFee) updateData.annualFee = annualFee
    if (registrationFee) updateData.registrationFee = registrationFee
    if (activityFee) updateData.activityFee = activityFee

    // ************************************* Find the existing program by programName and update it ********************************//
    const updatedProgram = await fee.findOneAndUpdate(
      { programName },
      { $set: updateData },
      { new: true }
    )

    if (!updatedProgram) throw new Error('Program not found')

    return res.json({
      message: 'Updated program successfully',
      status: 200,
    })
  } catch (error) {
    return res.json({
      message: error.message,
      status: 500,
    })
  }
}

const deleteFeeTable = async (req, res) => {
  try {
    
    if (req.isAdmin === false) throw new Error('Not authenticated')
 
    const {_id} = req.body;

    if (!_id) throw new Error('Program name is not found')

    // ************************************** Find the program by programName and delete it *************************************
    const deletedProgram = await fee.findByIdAndDelete(_id)

    if (!deletedProgram) throw new Error('Program not found')

    return res.json({
      message: 'Deleted program successfully',
      status: 200,
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: 500,
    })
  }
}

export {
  signIn,
  signUp,
  createFeeTable,
  updateFeeTable,
  deleteFeeTable,
  getAllFees,
}
