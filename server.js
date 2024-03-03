const express = require('express');
const app = express();
const db = require('./db');
const prompt = require('prompt');
require('dotenv').config();
const passport = require('./auth');

const bodyParser = require('body-parser');
const { message } = require('prompt');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

//Middleware function
const logRequest = (req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl} `);
    next();//Move on to the next phrase
}

app.use(logRequest);


app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local',{session : false});
app.get('/',(req,res)=>{
    res.send('hello from hotel');
})

//import the router file
const personRoute = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/menuItemRoutes');

//use the routers
app.use('/emp',personRoute);
app.use('/menu',MenuItemRoutes);




app.listen(PORT ,()=>{
    console.log("Listening to port 3000");
});