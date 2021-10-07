const express=require('express')
var cors = require('cors')
var app = express()

app.use(cors())

require('dotenv').config()

const PORT=process.env.PORT || 5000;

app.use(express.json())

const PostRouter=require('./blog/post')

app.use('',PostRouter)

app.listen(PORT,()=>{
  console.log(`server listening on ${PORT}`);
})


