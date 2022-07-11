const jwt = require("jsonwebtoken")
const { SECRETKEY } = require("../config")
const { UnauthorizedError } = require("../utils/errors")

const jwtForm = ({ headers }) => {
    if (headers?.authorized) {
        const [scheme, token] = headers.authorization.split(" ")
        if (scheme.trim() == "Bearer"){
            return token
        }
    }
    return undefined
}

const extractUserFromJwt = (req, res, next) => {
    try {
        const token = jwtForm(req)
        if (token) {
            res.locals.user = jwt.verify(token, SECRETKEY)
        }
    } catch(err) {
        return next()
    }
}


const requireAuthenticatedUser = (req, res, next) => {
    try {
        const { user } = res.locals
        if (!user?.email) {
            throw new UnauthorizedError()
        }
        return next()
    } catch(err) {
        return next(err)
    }
}  

module.exports = {
    requireAuthenticatedUser,
    extractUserFromJwt,
}