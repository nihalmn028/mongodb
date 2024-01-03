const express=require('express')
const router=express.Router()
router.route('/').get((req,res)=>{
  res.status(200).json({message:"hello"})//CRED

}).post((req,res)=>{
  res.status(200).json({message:`create contact ${req.body.name}`})//if there is same route then we can chain functions


})
// router.route('/').post((req,res)=>{
//   res.status(200).json({message:`create contact ${req.body.name}`})//if there is same route then we can chain functions


// })
router.route('/:id').put((req,res)=>{
  res.status(200).json({message:`updated for ${req.params.id}`})

})
router.route('/:id').delete((req,res)=>{
  res.status(200).json({message:`deleted ${req.params.id}`})

})
module.exports=router