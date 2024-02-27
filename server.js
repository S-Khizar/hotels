const express = require('express');
const app = express();
const db = require('./db');
const Menu =require('./models/Menu');

const bodyParser = require('body-parser');
const { message } = require('prompt');
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('hello from hotel');
})

//import the router file
const personRoute = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/menuItemRoutes');

//use the routers
app.use('/emp',personRoute);
app.use('/menu',MenuItemRoutes);




app.listen(3000 ,()=>{
    console.log("Listening to port 3000");
});