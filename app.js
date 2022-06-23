const express = require('express')
const path = require('path')
const port = process.env.PORT || 4999

const app = express()
// const publicPath = path.join(__dirname,"public")
// const p5Path = path.join(__dirname, "p5")
// app.use(express.static(publicPath))
// app.use(express.static(p5Path))

app.get("/", (req, res) => {
    res.send("Hello from Heroku!")
})
app.get("/*", (req, res) => {
    res.send("Page is missing!")
})

/*app.get("/p5", (req, res) => {
    res.sendFile(path.join(p5Path,"p5.html"))
})*/

app.listen(port, (err) =>{
    if(err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Server Running. Listening on port ${port}`)
})