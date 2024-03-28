import {emailVerification, generateEmail1} from "../services/emailVerificationService.js";
export const emailVerify = async(req, res) =>{
    return emailVerification(req,res);
}

export const generateEmail = async (req, res) => {
    return generateEmail1(req, res);
}