const mongoose=require('mongoose')
const timeStamps=required('mongoose-timestamps')
const Schema=mongoose.Schema;
const userSchema=new Schema({
    fisrtName:{type:String,required:true},
    lastName:{type:String,required:false},
    email:{type:String,required:true},
    password:{type:String,required:true},
    usertype:{type:String,deafult:'user'},
    createdAt:Date,
    updatedAt:Date
})
userSchema.plugin(timeStamps,{index:true})
module.exports=mongoose.model('User',userSchema)

