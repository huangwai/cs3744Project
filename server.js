const express = require('express')
const path = require('path')
const port = process.env.PORT || 4999

const server = express()
const publicPath = path.join(__dirname, 'build')

 const p5Path = path.join(__dirname,'src');
server.use(express.static(publicPath))
// server.use(express.static(publicPath));
// server.use(express.static(p5Path))

server.get("/", (req, res)=>{
    res.sendFile(path.join(publicPath, 'index.html'))
})

server.listen(port, (err)=>{
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Server Running. Listening on port ${port}`)
})

// server.get("/",(req,res) => {
//     res.sendFile(path.join(publicPath,'index.html'))
// })
//
// server.get("/*",(req,res) => {
//     res.send("Page Missing")
// })
// server.get("/p5/*",(req,res)=>{
//     res.redirect("/")
// })