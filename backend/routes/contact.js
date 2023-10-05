const { Route } = require('express');
const express = require('express')

const ContactRouter = express.Router()
const { deletContact,GetById,UpdateContact,AddContact,GetContact}=require('../controllers/contact')

//get route 

ContactRouter.get('/',GetContact)

//delet routes 

ContactRouter.delete('/:id',deletContact)


//post route 

ContactRouter.post('/',AddContact)

//put route 


ContactRouter.put('/:id',UpdateContact)


//and naw it's the get by id 

ContactRouter.get('/:id',GetById)
module.exports = ContactRouter