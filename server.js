const express=require('express')
const app=express()
app.use(express.json())
//middleware function

app.use((req,res,next)=>{
  // console.log("request recieved")

  console.log(`${req.url}`)
  console.log(`${req.method}`)

console.log(Date.now())
  next()
})


const dotenv=require('dotenv').config()
const port=process.env.PORT || 3000
// app.get('/api/contacts',(req,res)=>{
//   res.status(200).json({message:"hello"})
// })
const contactsRouter=require('./routes/contactsRouter.js')
app.use('/api/contacts',contactsRouter)
app.listen(port,()=>{
  console.log(`server running ${port}`)
})