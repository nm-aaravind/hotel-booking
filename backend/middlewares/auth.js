import { checkSchema, validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'

export async function signUpValidation(req, res, next) {
    await checkSchema({
        email: { exists: { errorMessage: "Email is required", bail: true }, isEmail: true },
        password: { exists: { errorMessage: "Password is required", bail: true }, isLength: { options: { min: 5 }, errorMessage: "Password should be atleast 5 characters long" } },
        firstName: { exists: { errorMessage: "firstName is required", bail: true }, isString: { errorMessage: "firstName should be string" } },
        lastName: { exists: { errorMessage: "lastName is required", bail: true }, isString: { errorMessage: "lastName should be string" } },
    }).run(req);
    const error = validationResult(req)
    if (!(error.isEmpty())) {
        return res.status(400).json({
            message: error.array()
        })
    }
    next()
}

export async function loginValidation(req, res, next) {
    await checkSchema({
        email: { exists: { errorMessage: "Email is required", bail: true }, isEmail: true },
        password: { exists: { errorMessage: "Password is required", bail: true }, isLength: { options: { min: 5 }, errorMessage: "Password should be atleast 5 characters long" } }
    }).run(req);
    const error = validationResult(req)
    if (!(error.isEmpty())) {
        return res.status(400).json({
            message: error.array()
        })
    }
    next()
}

export async function verifyToken(req, res, next){
    const token = req.cookies['auth-token'];
    if(!token){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    try {
        const checkToken = jwt.verify(token, process.env.JWT_KEY);
        req.userId = checkToken.userId;
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
}

