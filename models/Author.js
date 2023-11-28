const mongoose = require("mongoose");
const joi = require('joi');

const AuthorSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength:3,
        maxlength:200,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength:2,
        maxlength:100,
    },
    nationality: {
        type: String,
        required: true,
        trim: true,
        minlength:3,
        maxlength:200,
    },
    image: {
        type: String,
        default:"default-avatar.png"
    },
},{
timestamps:true
});

const Author = mongoose.model("Author" , AuthorSchema);


//validate create author
function validatecreateauthor(obj){
    const schema = joi.object({
        firstname:joi.string().trim().min(3).max(200).required(),
        lastname:joi.string().trim().min(3).max(200).required(),
        nationality:joi.string().trim().min(2).max(100).required(),
       });
   
       return schema.validate(obj);
}

//validate update book
function validateupdateauthor(obj){
    const schema = joi.object({
        firstname:joi.string().trim().min(3).max(200),
        lastname:joi.string().trim().min(3).max(200),
        nationality:joi.string().trim().min(2).max(100),
       });
   
       return schema.validate(obj);
}


module.exports= {
    Author,
    validatecreateauthor,
    validateupdateauthor
}