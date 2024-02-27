const express = require('express');
const router = express.Router();
const Employe = require('./../models/Emp');
const { message } = require('prompt');

//POST route to add a person
router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newEmploye = new Employe(data);
        const response = await newEmploye.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({err : 'Internal server error'});
    }
})

//GET route to add a person
router.get('/',async(req,res)=>{
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