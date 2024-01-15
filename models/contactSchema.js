const mongoose=require('mongoose')
//create 
const contactSchema=mongoose.Schema({
  name:{
    type:String,
    required:[true,"name required"]

  },
  phone:{
    type:Number,
    required:[true,"phone number required"]
  },
  email:{
    type:String,
    required:[true,"email required"]
  }
},
{
  timestamps:true//time tracking  during updation
})


module.exports=mongoose.model("contactSchema",contactSchema)