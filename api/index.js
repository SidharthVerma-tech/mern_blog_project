import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import postRoutes from './routes/post.route.js'
import commentRoutes from './routes/comment.routes.js'
import path from 'path'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log('Mongo DB is connectd')
    }
).catch(err=>{
    console.log(err)
})
const __dirname = path.resolve()
app.listen(3000, ()=>{
    console.log('Server is running on Port 3000')
})

app.use('/api/user',userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)
app.use(express.static(path.join(__dirname, '/client/dist')))
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})