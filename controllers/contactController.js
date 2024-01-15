const contactSchema=require('../models/contactSchema.js')

const getContact = (req,res)=>{
  res.status(200).json({message:"hello"})//CRED

}
const postContact = async (req,res)=>{
  const {name,email,phone}=req.body
  const contact= await contactSchema.create({
    name:name,
    phone:phone,
    email:email
  })
  res.status(200).json({message: `create contact ${req.body.name}`})//CRED

}
const putContact = (req,res)=>{
  res.status(200).json({ message: `updated for ${req.params.id}` })//CRED

}
const deleteContact = (req,res)=>{
  res.status(200).json({ message: `deleted ${req.params.id}` })//CRED
 
}

module.exports={getContact,postContact,putContact,deleteContact}
