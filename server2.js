//convert string to JSON
// const jsonString ='{"name":"Khizar","age":25,"hobbies":["playing","eating","roaming"]}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);
// console.log(jsonObject.age);
// console.log(jsonObject.hobbies);

//convert JSON to string
// const objectToConvert= {
//     name:"Alice",
//     age:25,
//     hobbies:["playing","eating","roaming"]
// };
// const json = JSON.stringify(objectToConvert);
// console.log(json);
// console.log(typeof json);

// const express = require('express')
// const app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.get('/chicken' ,(req,res)=>{
//     res.send("love to serve you chicken")
// })
// app.get('/idli',(req,res)=>{
//     const customized_idli={
//         name : 'rava idli',
//         size : '10 cm diamter',
//         is_sambhar : true,
//         is_chutney : false
//     }
//     res.send(customized_idli);
// })
// app.get('/rIdli', (req, res) => {
//     const customized_idli = {
//         name: 'rava idli',
//         size: '10 cm diameter',
//         is_sambhar: false,
//         is_chutney: tru
//     };
//     const message = ['we have more to offer','try the chutney'];

//     const responseObj = {
//         idli: customized_idli,
//         message: message
//     };
//     res.send(responseObj);
// });

// app.listen(3000,()=> {
//     console.log('Server is live on port 3000');
// })

//problem 2
// const JsonString = '{"name": "Alice", "age": 9737, "hobbies": ["reading","painting"]}';
// const JsonObject = JSON.parse(JsonString);
// console.log(JsonObject.age);

// const JsonObject1 = {title: "Book", pages:200};
// const jsonString1 = JSON.stringify(JsonObject1);
// console.log(jsonString1);

//problem 4
const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('hello to the world of nodeeee');
})
app.get('/wheather',(req,res)=>{
    const wheatherInfo={
        temprature : 25,
        currentWheather : 'sunny',
        condition:'humid',
        city:'Mumbai'

    }
    res.json(wheatherInfo);
})
app.listen(3000 ,()=>{
    console.log("Listening to port 3000");
});



