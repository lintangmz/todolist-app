require('dotenv').config()
const express = require('express')
const router = require('./routes/index')
const passport = require('./lib/passport')
const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(passport.initialize())

app.set('view engine', 'ejs')

app.use(router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})