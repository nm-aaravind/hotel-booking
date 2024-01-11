import express from 'express'
import cors from 'cors'
import "dotenv/config"
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING)
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req, res) => {
    res.json({ message:"Hello from test" })
})

app.listen(3000, () => {
    console.log("Hello from express")
})