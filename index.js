import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './database/config.js'
import { studentRoutes } from './Routers/students.js';
import { mentorRouter } from './Routers/mentor.js';
import { assignRouter } from './Routers/assign.js';



dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
const port= process.env.PORT
app.get('/', (req,res) => {
    res.send('welcome to the Mentor and Student Assigning with Database')
})

connectDB()
// application router
app.use('/mentor', mentorRouter);
app.use('/student', studentRoutes);
app.use('/assign', assignRouter);

app.listen(port, () => {
    console.log('app is listening-',port)
})