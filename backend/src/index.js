import express from 'express'
import cors from 'cors'
import "dotenv/config"
import mongoose from 'mongoose'
import userRouter from './routes/user.js'
import cookieParser from 'cookie-parser'
try {
    await mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING)
    console.log("Connected to db")
} catch (error) {
    console.log(error, "DAI")
}
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(cookieParser())
app.use("/api/users", userRouter)

app.listen(process.env.PORT, () => {
    console.log("Hello from express", process.env.PORT)
})