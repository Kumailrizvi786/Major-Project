export const loginUser = async (req, res, next) => {
    try{
    const data = {
        userEmail: req.body.userEmail,
        password: req.body.password
    }

    console.log("User Logged In ");

    res.setHeader('Content-type', 'application/json');
    res.status(200).send(JSON.stringify(data))
}
catch(err){
    console.log(err);
}
}


export const logoutUser = async (req, res, next) => {
    console.log("User Log Out");
}