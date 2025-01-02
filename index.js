const express = require('express')
const app = express()
const dotenv = require('dotenv')
const userRoute = require('./routes/userRoute')
dotenv.config()
const PORT = process.env.PORT

// endpoint 
app.get('/Hello', (req, res) => {
    res.json({
        message: 'Hello world', 
        method : req.method,
        ip : req.ip,
        userAgent : req.headers['user-agent']
    })
})


app.use('/users', userRoute)


app.listen(PORT, () => {
    console.log('Server is running on ' + PORT)
})