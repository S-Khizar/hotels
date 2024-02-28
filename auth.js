const passport = require('passport');
const LocalStratergy = require('passport-local').Strategy;

const employe = require('./models/Emp');

passport.use(new LocalStratergy(async(USERNAME,password,done)=>{
    //authentication logic here
    try{
        // console.log('Recieved credentials : ',USERNAME,password);
        const user =await employe.findOne({username : USERNAME});
        if(!user){
            return done(null,false,{message:'Incorrect username.'});
        }
        const isPasswordMatch =await user.comparePassword(password);
        if(isPasswordMatch){
            return done(null,user);
        }else{
            return done(null,false,{message : 'Incorrect password.'});
        }
    }catch(err){
        return done(err)
    }
}))

module.exports = passport;
