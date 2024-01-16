const contactSchema=require('../models/contactSchema.js')

const getContact =async (req,res)=>{
  const allContacts= await contactSchema.find()
  // const allContacts= await contactSchema.findById(req.params.id)

  res.status(200).json(allContacts)//CRED

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
const putContact =async (req,res)=>{
  const checkContact=contactSchema.findById(req.params.id)
  try{
    if(checkContact)
  {
const updatedContact=await contactSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
res.status(200).json(updatedContact)
  }
  else{
    res.status(404)
  }
}
catch{
  console.log("errr")
}
  // res.status(200).json({ message: `updated for ${req.params.id}` })//CRED

}
const deleteContact =async (req,res)=>{
  const deletedContact=await contactSchema.findByIdAndDelete(req.params.id)
res.status(200).json(deletedContact)
  // res.status(200).json({ message: `deleted ${req.params.id}` })//CRED
 
}

module.exports={getContact,postContact,putContact,deleteContact}
