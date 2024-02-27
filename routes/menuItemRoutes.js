const express = require('express');
const router = express.Router();
const Menu = require('./../models/Menu');
const bodyParser = require('body-parser');


router.post('/',async(req,res)=>{
    try{
        const data = req.body //Assuming the request body contains the person data
        //create a new person document using the Mongoose model
        const newMenu = new Menu(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
})
router.get('/',async(req,res)=>{
    try{
        const data = await Menu.find();
        console.log('data is fetched');
        const message="we have more menu to offer";
        res.status(200).json({data,message});

    }catch(err){
        console.log(err);
        res.status(500).json({err : 'Internal server error'});
    }
})
router.get('/:taste',async(req,res)=>{
    try{
        const tasteType = req.params.taste;
        if(tasteType == 'sour'|| tasteType =='sweet' || tasteType =='spicy'){
            const response = await Menu.find({taste : tasteType})
            console.log("Data is fetched succesfully");
            res.status(200).json(response);
        }

    }catch(err){
        console.log(err);
        response.status(500).json({err:'Internal server error'});
    }
})
router.put('/:id',async(req,res)=>{
    try{
        const mneuId = req.params.id;
        const updateMenu = req.body;

        const response = await Menu.findByIdAndUpdate(mneuId,updateMenu,{
            new:true,
            runValidators:true
        });
        if(!response){
            return res.status(404).json({message : 'Dish does not exist'})
        }
        console.log('Data updated succesfully');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        response.status(500).json({err:'Internal server error'});
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const menuId = req.params.id;
        const response = await Menu.findByIdAndDelete(menuId);
        if(!response){
            return res.status(404).json({message : 'Menu does not exist'});
        }
        console.log('data deleted succesfully');
        res.status(200).json({message : 'data deleted'});
    }catch(err){
        console.log(err);
        response.status(500).json({err:'Internal server error'});
    }
})
module.exports = router;