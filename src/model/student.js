const { Schema, model } = require('mongoose')
const Joi=require('joi')
const schema = new Schema({
    firstName:{
        type:String,
        require:true,
        trim:true,
        minlength:5
    },
    lastName:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        validator:{
            validator:(email)=>{
                return !Joi.string().email().validate(email).error;
            },
            msg:'Invalid email format'
        }
    },
    courses:[{type:String,ref:'Course'}]
})

module.exports=model('Student',schema)