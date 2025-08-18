const mongoose = require('mongoose');
const timestamps=require('mongoose-timestamps');
const Schema = mongoose.Schema;
const studentSchema= new Schema({
    rollNo:{type:Number, required: true},
    name:{type:String, required: true},
    adharCardNo:{type:String, required: true},
    mobileNo:{type:String},
    createdAt:Date,
    updatedAt:Date,
});
studentSchema.plugin(timestamps,{index:true});
module.exports=mongoose.model('Student',studentSchema);