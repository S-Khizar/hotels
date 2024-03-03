const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const employeSchema = new  mongoose.Schema({
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
   },
   username :{
     required:true,
     type:String
   },
   password:{
     required:true,
     type:String
   }
});

employeSchema.pre('save',async function(next){
     const employe =this;

     //Hash the password only if it has been modified (or is new)
     if(!employe.isModified('password')) return next();

     try{
          //hash password generation
          const salt = await bcrypt.genSalt(10);

          //hash passowrd
          const hashPassword = await bcrypt.hash(employe.password,salt);
          employe.password = hashPassword;
          next();
     }catch(err){
          return next(err);

     }
})

employeSchema.methods.comparePassword = async function(candidatePassword){
     try{
          const isMatch = await bcrypt.compare(candidatePassword,this.password);
          return isMatch;
     }catch(err){
          throw err;
     }
}


const employe =mongoose.model('employe',employeSchema);
module.exports=employe