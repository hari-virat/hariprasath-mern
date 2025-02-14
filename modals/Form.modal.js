const mongoose = require('mongoose');
const schema = mongoose.Schema;
const fromSchema = new schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true,
    }
},{
    timestamps : true
})

const from = mongoose.model('FormData',fromSchema);

module.exports = from;