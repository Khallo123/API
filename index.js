const express = require('express')
const app = express()
const dotenv = require('dotenv')
const userRoute = require('./routes/userRoute')


dotenv.config()
const PORT = process.env.PORT

app.use(express.json())


app.use('/users', userRoute)


app.listen(PORT, () => {
    console.log("Server is running on " + PORT)
})