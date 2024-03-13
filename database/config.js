import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()


const mongourl=process.env.MONGO_URL


export function connectDB() {
    try {
        mongoose.connect(mongourl)
        console.log("connect to mongodb")
    } catch (err) {
        console.log("error conect to mongodb")
    }
}