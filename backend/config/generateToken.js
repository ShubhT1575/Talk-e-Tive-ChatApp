const jwt = require('jsonwebtoken')
const JWT_SECRET = "Shubham";

const generateToken = (id) => {
    return jwt.sign({id},JWT_SECRET,{
        expiresIn: "365d",
    })
}

module.exports = generateToken