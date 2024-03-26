
export const emailVerification = async (req, res) => {
    if(req.params.token){
    return "Email Verification Service called";
}else{
    return "Email Verification Service called 2";
}
}