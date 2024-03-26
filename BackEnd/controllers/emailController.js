import {emailVerification} from "../services/emailVerificationService.js";
import {} from "";
export const emailVerify = async(req, res) =>{
    return emailVerification(req,res);
}

export const generateEmail = async (req, res) => {
    
}