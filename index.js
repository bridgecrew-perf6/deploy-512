const express = require('express')
const res = require('express/lib/response')
const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    res.end('<h1>Home page</h1>')
})

app.get('/about', (req, res) => {
    res.end('<h1>About page</h1>')
})

app.listen(PORT, () => {
    console.log('Server has been started...')
})