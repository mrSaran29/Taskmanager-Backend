const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const CreateRouter=require('./Router/router')
const dotenv=require('dotenv')

dotenv.config()

mongoose.connect(process.env.DB_STRING)
.then(()=>{
    console.log('DB connect successfully')
})

app.use(cors())
app.use(express.json())
app.use('/home',CreateRouter)
app.listen(8080,()=>{
     console.log('server is running')
})