const adminEmail = "rahul956vishwakarma@gmail.com";
const nodemailer = require('nodemailer')

const contacts = async (req, res) => {
    try {
        const { parentName, phoneNumber, email, studentName, studentAge, programIntrest, message } = req.body;
        if (!parentName || !phoneNumber || !email || !studentName || !studentAge || !programIntrest || !message) {
            throw new Error('fields are missing');
        }
        const isSendEmails = await sendmails(adminEmail, email, studentName);
        if (!isSendEmails || isSendEmails === false) {
            throw new error('something went wrong in email sending')
        }

        return res.json({
            message: "email send successfully",
            status: 200
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
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: 'rahul930vishwakarma@gmail.com',
                pass: 'bitp xdmz wxsq bgul'
            }
        });

        // Mail options for the admin
        var adminMailOptions = {
            from: 'rahul930vishwakarma@gmail.com',
            to: adminEmail,
            subject: 'New Form Submission',
            text: `A new form has been submitted by ${userName}.`
        };

        // Mail options for the user
        var userMailOptions = {
            from: adminEmail,
            to: userEmail,
            subject: 'Form Submission Confirmation',
            text: `Hello ${userName},\n\nThank you for submitting the form. We have received your submission.`
        };

        // Send email to admin first
        transporter.sendMail(adminMailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                // console.log('Email sent to admin: ' + info.response);

                transporter.sendMail(userMailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        // console.log('Email sent to user: ' + info.response);
                    }
                });
            }
        });

        return true;

    } catch (error) {
        console.log(error.message);
        return false;
    }
};


module.exports = { contacts }

// https://meet.google.com/cfw-rrom-qgd