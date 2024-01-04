const getContact = (req,res)=>{
  res.status(200).json({message:"hello"})//CRED

}
const postContact = (req,res)=>{
  res.status(200).json({message: `create contact ${req.body.name}`})//CRED

}
const putContact = (req,res)=>{
  res.status(200).json({ message: `updated for ${req.params.id}` })//CRED

}
const deleteContact = (req,res)=>{
  res.status(200).json({ message: `deleted ${req.params.id}` })//CRED

}
module.exports={getContact,postContact,putContact,deleteContact}
