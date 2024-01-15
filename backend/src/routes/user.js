import express from 'express'
import User from '../models/user.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { signUpValidation, loginValidation } from '../../middlewares/auth.js';
const router = express.Router();

router.post('/register',signUpValidation ,async (req, res) => {
    try {
        console.log("DEI")
        let user = await User.findOne({
            email: req.body.email
        })
        if(user){
            return res.status(400).json({
                message: "User already exists"
            })
        }
        user = new User(req.body)
        await user.save()

        const token = jwt.sign({
            userId: user.id,
        },
        process.env.JWT_KEY,
        {
            expiresIn: '1d'
        })
        res.cookie("auth-token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 86400000
        })
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Something went wrong"
        })
    }
})

router.post('/login' , loginValidation, async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            email: email
        })
        if(!user){
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const pwCheck = await bcrypt.compare(password, user.password);

        if(!pwCheck){
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }
        const token = jwt.sign({
            userId: user.id
        }, process.env.JWT_KEY, {
            expiresIn : "1d"
        });
        res.cookie("auth-token" , token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 86400000
        })
        return res.status(200).json({
            userId: user.id
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
})
export default router;