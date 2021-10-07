const mongoose=require('mongoose')



const POST=new  mongoose.Schema({
  title:{
    type:String,
    required:true,
    maxlength:20
  },
  body:{
   type:String,
   required:true,
   maxlength:200
  },
  date:{
    type:Date,
    default:Date.now
  }

})

module.exports=mongoose.model('POST',POST)