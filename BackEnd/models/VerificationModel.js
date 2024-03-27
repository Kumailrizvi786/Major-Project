import mongoose from 'mongoose';

export default mongoose.model('Verification', new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
    otpExpiry: { type: Date, required: true } // Optional: Add an expiry timestamp for the OTP
}));
