import nodemailer from "nodemailer";
import crypto from "crypto";


//Template for EmailVerification
function verificationEmailTemplate(verificationUrl, token) {
    const urlWithToken = `${verificationUrl}?token=${token}`;
  
    return `
  <!DOCTYPE html>
  <html>
  <body>
    <p>Welcome to our CHDT!</p>
    <p>Please click the link below to verify your email address:</p>
    <a href="${urlWithToken}">Verify Email</a>
  </body>
  </html>
  `;
}
  

const transporter = nodemailer.createTransporte({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    },
})

//generating email unique token
const generateVerificationToken = () => {
    return crypto.randomBytes(20).toString('hex');
};

export const handleEmailGeneration = async (req, res) => {
    const token = generateVerificationToken();
    const verificationURL = `http://localhost:${process.env.PORT || 8081}/verifyEmail`;
    
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: req.body.email,
        Subject: "Testing",
        html: verificationEmailTemplate(verificationURL, token),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log("Verification Email sent successfully");
    } catch (error) {
        console.log(`Error sending Email: ${error}`);
    }


}
