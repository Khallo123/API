const express = require('express')
const app = express()


app.get('/hello', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})


app.listen(4000, () => {
    console.log('Server is listening on port 4000')
})