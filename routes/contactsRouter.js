const express = require('express')
const router = express.Router()
router.use((req,res,next)=>{
console.log("middleware inside router")
next()
})
const { getContact,postContact,putContact,deleteContact } = require('../controllers/contactController.js')
router.route('/').get(getContact).post(postContact)
// router.route('/:id').get(getContact).post(postContact)

// router.route('/').post((req,res)=>{
//   res.status(200).json({message:`create contact ${req.body.name}`})//if there is same route then we can chain functions


// })
router.route('/:id').put(putContact)
router.route('/:id').delete(deleteContact)
module.exports = router