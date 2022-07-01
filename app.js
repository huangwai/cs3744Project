const express = require('express')
const path = require('path')
const port = process.env.PORT || 4999

const app = express();
 const publicPath = path.join(__dirname, 'public')
 const p5Path = path.join(__dirname,'src');
// app.use(express.static(publicPath));
// app.use(express.static(p5Path))

app.get("/",(req,res) => {
    res.sendFile(path.join(publicPath,'index.html'))
})

app.get("/*",(req,res) => {
    res.send("Page Missing")
})
app.get("/p5/*",(req,res)=>{
    res.redirect("/")
})

app.listen(port,(err)=>{
    if(err){
        console.log(err)
        process.exit(1)
    }
    console.log(`Server Running. Listening on port ${port}`)
})