const express = require('express')
require('dotenv').config()
const app = express()


app.get('/', (req, res) => {
    res.send('Home page')
})


app.get('/twitter', (req, res) => {
    res.send('Twitter Page')
})

app.listen(process.env.PORT, () => {
    console.log('App start')
})

