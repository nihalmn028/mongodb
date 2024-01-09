const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const port=process.env.PORT || 3000
const contactsRouter=require('./routes/contactsRouter.js')

app.use(express.json())
//middleware function

// app.use((req,res,next)=>{
//   // console.log("request recieved")

//   console.log(`${req.url}`)
//   console.log(`${req.method}`)

// console.log(Date.now())
//   next()
// })



app.use('/api/contacts',contactsRouter)
app.get('/',(req,res)=>{
  res.status(200).json({message:"hello world"})
})


app.listen(port,()=>{
  console.log(`server running ${port}`)
})



