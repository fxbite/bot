const express = require('express')
const route = require('./routes')
const morgan = require('morgan')
const dotenv = require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})