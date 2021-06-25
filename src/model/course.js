const { ObjectId } = require('mongodb');
const { Schema, model } = require('mongoose')

const schema = new Schema({
    _id: {
        type: String,
        uppercase: true,
        alias:'code'
    },
    name: {
        type: 'string',
        require: true
    },
    des: {
        type: String,
        default: 'This is a description'
    },
    students:[{
        type:Schema.Types.ObjectId,ref:'Student'
    }],
    __v:{
        type:Number,
        select:false
    }
},
{
    timestamps:true,
    toJSON:{
        virtuals: true
    },
    id:false
});

// schema.virtual('code').get(function(){
//     return this._id;
// })

module.exports = model('Course', schema)
