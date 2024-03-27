import {emailVerification, emailGenerator} from "../services/emailVerificationService.js";
export const emailVerify = async(req, res) =>{
    return emailVerification(req,res);
}

export const generateEmail = async (req, res) => {
    return emailGenerator(req, res);
}