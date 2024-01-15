const mongoose =require('mongoose')
const connectDb=async()=>{
  try{
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('db connected',mongoose.connection.host,mongoose.connection.name);

  }catch(err){
    console.log(err);
  }
}
module.exports=connectDb
 




