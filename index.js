const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5001


const app = express()
app.use(express.static(path.join(__dirname, 'public')));

app
    .get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))
    .listen(PORT, () => console.log(`Listening on ${PORT}`))