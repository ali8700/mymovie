const mongoose = require('mongoose')

//creation of the schemma 

const ContactSchema = mongoose.Schema({
    //tkteb schema chfih
    name:String,
    age:Number,
    email: {
        type:String ,
        required : true ,
        unique : true 

    }
})

module.exports = mongoose.model('Contacte',ContactSchema)