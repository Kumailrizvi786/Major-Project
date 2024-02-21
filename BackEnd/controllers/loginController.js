export const loginUser = async (req, res, next) => {
    const data = {
        userName: req.body.userName,
        userEmail: req.body.userEmail
    }

    console.log("User Logged In ");

    res.setHeader('Content-type', 'application/json');
    res.status(200).send(JSON.stringify(data))
}