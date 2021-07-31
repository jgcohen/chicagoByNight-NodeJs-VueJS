import express from 'express'
import mongoose from 'mongoose'
import routes from  './routes/route.js'
import privateRoutes from './routes/privateRoutes.js'
import passport from 'passport'
import dotenv from 'dotenv'
import cors from 'cors'
import './auth/auth.js'
dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()


app.use(express.json())
app.use(cors());
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false
 })

 app.use('/private', passport.authenticate('jwt',{session:false}), 
 privateRoutes)
app.use(routes)

app.listen(PORT,()=> {
    console.log(`le serveur est lancé sur le port : ${PORT}`)
})