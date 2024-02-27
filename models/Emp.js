const mongoose=require('mongoose');

const employeSchema = new  mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type : Number,
   },
   work:{
        type:String,
        enum :['Chef' , 'Waiter','Manager'],
        required:true
   },
   mobile:{
        type: String,
        required : true
   },
   email:{
        type:String,
        required:true,
        unique : true
   },
   address:{
        type : String,

   },
   salary:{
        type:Number,
        required : true
   }
});
const employe =mongoose.model('employe',employeSchema);
module.exports=employe