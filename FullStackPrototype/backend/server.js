require('dotenv').config()

const express = require("express")


// cretes express
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({message: "Welcome!!"})
})

//listen for requests
// app.listen(4000, () => {
//     console.log("listening for port 4000?!");
// })

app.listen(process.env.PORT, () => {
    console.log("PORT called from .env");
})