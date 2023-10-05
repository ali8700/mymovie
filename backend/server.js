const express = require('express')

const app = express()

const cors =require('cors')
const connecdb = require('./config/db')
const authRouter= require('./routes/authuser')

// ajout partie contactlist
const ContactRouter = require('./routes/contact')
require('dotenv').config()

const port = process.env.PORT || 5000 
connecdb()
app.use(cors())

app.use(express.json())

// path genral de l'autnetification

 app.use('/auth',authRouter)




 app.use('/api/user',ContactRouter)





app.listen(port,(err)=>{
    err?console.log(err):console.log(`you are connetecd to the port ${port}`)
})







