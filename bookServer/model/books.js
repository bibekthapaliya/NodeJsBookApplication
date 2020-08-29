const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-Currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const bookSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Currency,
        required:true,
        min:0
    },
    authorname:{
        type:String,
        required:true
    }
},{
    timestamps:true
});


var Books = mongoose.model('Book',bookSchema);
module.exports = Books;