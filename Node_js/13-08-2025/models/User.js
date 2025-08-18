const mongoose = require('mongoose');
const timestamps=require('mongoose-timestamps');
const Schema = mongoose.Schema;
const userSchema= new Schema({
    firstName:{type:String, required: true},
    lastName:{type:String, required: true},
    email:{type:String, required: true},
    pass:{type:String},
    createdAt:Date,
    updatedAt:Date,
});
userSchema.plugin(timestamps,{index:true});
module.exports=mongoose.model('User',userSchema);