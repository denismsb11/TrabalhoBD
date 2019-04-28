const express = require('express')

const app = express()
const port = process.env.PORT || 3001;
const domain = 'localhost'

app.get('/', (req, res) => {
    res.status(200).send('Hello')
})

app.listen(port, domain, () => {
    console.log(`Servidor disponível na porta ${port}`)
})