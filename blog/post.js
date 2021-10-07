const express=require('express')
const { isValidObjectId } = require('mongoose')
const PostRouter=express.Router()
const mongoose=require('./connection')
const POST=require('./Schema')









PostRouter.get('/',(req,res)=>{

  POST.find({},(err,post)=>{
     res.json(post)
  })
})





PostRouter.get('/:id',(req,res)=>{

  POST.findById(req.params.id,(err,post)=>{
  res.json(post)  
  })
  
})









//Edit Post

PostRouter.put('/:id',(req,res)=>{
  const id=req.params.id
  try {
    POST.findById(id,(err,post)=>{
      post.title=req.body.title,
      post.body=req.body.body
      post.save();
      res.json(post)
   });
  } catch (error) {
    res.json(error)
  }
})





//delete Post
PostRouter.delete('/:id',(req,res)=>{
  const id=req.params.id
  POST.findByIdAndRemove(id).exec();
  res.json('post removed !')
})






PostRouter.post('/',(req,res)=>{
  const {title,body}=req.body
  const post=new POST({
    title:title,
    body:body
  })

  post.save().then(success=>{
    res.send(success)
  }).catch(err=>{
    res.json(err)
 
  })

})




module.exports=PostRouter