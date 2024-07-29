const admin = require("../libs/models/adminModel");
const jwt = require('jsonwebtoken');
const fee = require("../libs/models/feeModel");
const adminToken = 'admin0000';

const signUp = async (req, res) => {
    try {
        const { email, password, token } = req.body;

        if (!email || !password || !token) throw new Error('fields are missing');

        if (token !== adminToken) throw new Error('admin token is wrong');

        const isEmail = await admin.findOne({ email });

        if (isEmail) throw new Error('this email already exits');

        const newAdmin = await admin.create({
            email,
            password,
            isAdmin: true
        })

        return res.json({
            status: 200,
            message: "admin is created successfully",
            newAdmin
        })
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: 500,
            message: error.message
        })
    }
}

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) throw new Error("fields are missing");

        const isAdmin = await admin.findOne({ email });

        if (!isAdmin) throw new Error('admin is not found');

        if (password !== isAdmin.password) throw new Error('please fill the correct password');


        const tokenData = { isAdmin };
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie('token', token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            sameSite: 'None',
            secure: true,
            httpOnly: true
        });

        return res.json({
            status: 200,
            message: "admin login successfully",
            token
        })

    } catch (error) {
        return res.json({
            status: 500,
            message: error.message
        })
    }
}

const createFeeTable = async (req, res) => {
    try {
        if (req.isAdmin === false) throw new Error('not authenticated');
        const { programName, ageGroup, annualFee, registrationFee, activityFee } = req.body;
        if (programName || ageGroup || annualFee || registrationFee || activityFee) throw new Error('fields are missing please fill all the fields carefully');
        const newprogram = await fee.create({
            programName,
            ageGroup,
            annualFee,
            registrationFee,
            activityFee
        })
        return res.json({
            message: "created new program successfully",
            status: 200,
        })
    } catch (error) {
        return res.json({
            message: error.message,
            status: 500,
        })
    }
}




module.exports = { signIn, signUp, createFeeTable }