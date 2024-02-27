const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/Person');
const Menu =require('./models/Menu');
const Task = require('./models/Task');

const bodyParser = require('body-parser');
const { message } = require('prompt');
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send('hello to the world of noingggg');
})
app.post('/person',async(req,res)=>{
    try {
        const data = req.body //Assuming the request body contains the person data
        //create a new person document using the Mongoose model
        const newPerson = new Person(data);

        //Saved the new person to the database 
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error : 'Internal Server error'});
    }
})
//get method to get the person
app.get('/person',async(req,res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server error'});
    }
})



app.post('/api/task',async(req,res)=>{
    try{
        const data = req.body //Assuming the request body contains the person data
        //create a new person document using the Mongoose model
        const newTask = new Task(data);
        const response = await newTask.save();
        console.log("data is saved");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({err : 'Internal Server error'});
    }
})
app.get('/api/task',async(req,res)=>{
    try{
        const data = await Task.find();
        console.log('data is fetched');
        const message="we have more task to do";
        res.status(200).json({data,message});

    }catch(err){
        console.log(err);
        res.status(500).json({err : 'Internal server error'});
    }
})


app.listen(3000 ,()=>{
    console.log("Listening to port 3000");
});