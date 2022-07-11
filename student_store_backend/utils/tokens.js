const jwt = require('jsonwebtoken')
const { SECRETKEY } = require("../config")

const generateToken = (data) => jwt.sign(data, SECRETKEY, { expiresIn: "24h" })

const createuserJwt = (user) => {
    const payload = {
        email: user.email,
        isAdmin: user.isAdmin || false,
    }
    return generateToken(payload)
}

const validateToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRETKEY)
        return decoded
    } catch (err) {
        return {}
    }
}

module.exports = {
    generateToken,
    validateToken,
    createuserJwt,
}