import nodemailer from 'nodemailer'
import Student from '../libs/models/studentModel.js'
import Admission from '../libs/models/admissionModel.js'

const adminEmail = 'rahul956vishwakarma@gmail.com'

export const contacts = async (req, res) => {
  try {
    const {
      parentName,
      phoneNumber,
      email,
      studentName,
      studentAge,
      programIntrest,
      message,
    } = req.body
    if (
      !parentName ||
      !phoneNumber ||
      !email ||
      !studentName ||
      !studentAge ||
      !programIntrest ||
      !message
    ) {
      throw new Error('fields are missing')
    }

    const studentData = {
      parentName, phoneNumber, email, studentName, studentAge, programIntrest, message
    }

    const newStudent = await Student.create(studentData)

    const isSendEmails = sendmails(adminEmail, email, studentName)
    if (!isSendEmails || isSendEmails === false) {
      throw new Error('something went wrong in email sending')
    }

    return res.json({
      message: 'email sent successfully',
      status: 200,
    })
  } catch (error) {
    return res.json({
      message: error.message,
      status: 500,
    })
  }
}

export const getContactStudentsData = async (req, res) => {
  try {
    const allContactData = await Student.find();
    console.log(allContactData);
    return res.json({
      message: "all data is fetched",
      status: 200,
      allContactData
    })
  } catch (error) {
    console.log(error.message);
  }
}

export const admission = async (req, res) => {
  try {
    const { fname, lname, dob, gender, email, phoneNumber, address, prevSchool, grade, comments } = req.body;
    console.log(req.body);

    if (!fname || !lname || !dob || !gender || !email || !phoneNumber || !address || !prevSchool || !grade || !comments) throw new Error("fields are missing");

    const studentName = fname + lname;

    const isSendEmails = sendmails(adminEmail, email, studentName)

    if (!isSendEmails || isSendEmails === false) {
      throw new Error('something went wrong in email sending')
    }

    const admissionData = {
      fname,
      lname,
      dob,
      gender,
      email,
      phoneNumber,
      address,
      prevSchool,
      grade,
      comments
    }

    const newAdmission = await Admission.create(admissionData)


    return res.json({
      message: 'successfull',
      status: 200,
      data: newAdmission
    })

  } catch (error) {
    return res.json({
      message: error.message,
      status: 500
    })
  }
}

export const getAdmission = async (req, res) => {
  try {
    const allAdmissionData = await Admission.find();
    return res.json({
      message: "all data is fetched",
      status: 200,
      allAdmissionData
    })
  } catch (error) {
    return res.json({
      message: error.message,
      status: 500
    })
  }

}


const sendmails = (adminEmail, userEmail, userName) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: 'rahul930vishwakarma@gmail.com',
        pass: 'bitp xdmz wxsq bgul',
      },
    })

    // Mail options for the admin
    const adminMailOptions = {
      from: 'rahul930vishwakarma@gmail.com',
      to: adminEmail,
      subject: 'New Form Submission',
      text: `A new form has been submitted by ${userName}.`,
    }

    // Mail options for the user
    const userMailOptions = {
      from: adminEmail,
      to: userEmail,
      subject: 'Form Submission Confirmation',
      text: `Hello ${userName},\n\nThank you for submitting the form. We have received your submission.`,
    }

    // Send email to admin first
    transporter.sendMail(adminMailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        transporter.sendMail(userMailOptions, (error, info) => {
          if (error) {
            console.log(error)
          }
        })
      }
    })

    return true
  } catch (error) {
    console.log(error.message)
    return false
  }
}

