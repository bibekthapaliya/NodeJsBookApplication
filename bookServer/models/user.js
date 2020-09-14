var mongoose = require('mongoose');
const { TooManyRequests } = require('http-errors');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
   /*automatically added by the passport local mongoose
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },*/
    firstname:{
        type:String,
        default:''
    },
    lastname:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    admin:{
        type:Boolean,
        default:false
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',User);