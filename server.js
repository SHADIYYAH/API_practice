const express = require('express')
const app = express()
const port = 2001

app.get('/',(req, res)=>{
    res.send('Hello NODE API')
})

app.get('/blog',(req, res)=>{
    res.send('Hello Blog, My name is Halimah')
})

app.listen(port,()=>{
    console.log(`Node API is running on port 2001`)
})