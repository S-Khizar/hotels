const express = require('express');
const router = express.Router();
const Employe = require('./../models/Emp');
const{jwtAuthMiddleware,generateToken} = require('./../jwt');
const { message } = require('prompt');

//POST route to add a person
router.post('/signup',async(req,res)=>{
    try{
        const data = req.body; //Assuming the request body contains the person data


        //Create a new person document using the mongoose model
        const newEmploye = new Employe(data);

        //Save the new person to the databse 
        const response = await newEmploye.save();
        console.log('data saved');

        const payload ={
            id:response.id,
            username:response.username
        }
        console.log(JSON.stringify(payload))
        const token = generateToken(payload);
        console.log("Token is : ",token);

        res.status(200).json({response : response,token : token});
    }   catch(err){
        console.log(err);
        res.status(500).json({err : 'Internal server error'});
    }
})

router.post('/login',async(req,res)=>{
    try{
        //Extract username and password from request body
        const {username , password} = req.body;

        //find the user by username 
        const user = await Employe.findOne({username:username});

        //if user does not exist or password does not match , return error
        if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({error : 'Invalid username or password'});
        }

        //generate token
        const payload = {
            id: user.id,
            username: user.username
        }
        const token = generateToken(payload);

        //return token as response
        res.json({token});


    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
})

//profile route
router.get('/profile',jwtAuthMiddleware,async(req,res)=>{
    try{
        const userData = req.user;
        console.log("User Data : ",userData);

        const userId = userData.id;
        const user = await Employe.findById(userId);

        res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
})

//GET route to add a person
router.get('/',jwtAuthMiddleware,async(req,res)=>{
    try{
        const data = await Employe.find();
        console.log('data fetched');
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server error'});
    }
})

router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType == 'Chef' || workType == 'Waiter' || workType == 'Manager' ){
            
            const response = await Employe.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            console.log(err);
            res.status(404).json({error : 'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
})
router.put('/:id',async(req,res)=>{
    try{
        const personId = req.params.id;//Extract the id from URL parameter
        const updatePersonData = req.body; //update data for emp

        const response = await Employe.findByIdAndUpdate(personId,updatePersonData,{
            new:true, //return the update document
            runValidators:true, //Run Mongoose validation
        });
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);


    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const personId = req.params.id //extract the id from URL parameter

        //Assuming you have a person model
        const response = await Employe.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person Not Found'});
        }
        console.log('Data deleted');
        res.status(200).json({message:'Employe deleted sucesfully'});

    }catch(err){
        onsole.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
})


module.exports = router;