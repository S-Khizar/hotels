// console.log('server file is running');

// function add(a,b){
//     return a+b;
// }
// var add = function(a,b){
//     return a+b;
// }
// var add=(a,b)=>{return a+b};
// var add=(a,b)=>a+b;
// var result = add(8,22);
// console.log(result);

// (function(){
//     console.log('khizar is added');
// })(); 

// function callback(){
//     console.log("Khizar is calling a callback function");
// }

// const add=function(a,b,callback){
//     var result=a+b;
//     console.log('result : ' +result);
//     callback();
// }

// add(4,6,callback);
// add(9,5,function(){
//     console.log('this is more broader version');
// })
//add(8,7,()=> console.log('inline function'));

// var fs=require('fs');
// var os = require('os');
// var user = os.userInfo();
// console.log(user);//It is used to get the info of a os
// console.log(user.username);

// fs.appendFile('greeting text','Hi' +user.username + '! \n',()=>console.log("file is created"));//It ise to created new text file in the folder with a greeting message
 
// console.log(os);
// console.log(fs);
 
// const notes = require('./notes.js');
// var   _     = require('lodash');
// var age = notes.age;
// console.log(age);

// var result=notes.addNumber(age,10);
// console.log('result is : ' +result);
// console.log('server file is availabe');
// var data=["person","person",1,2,1,2,'name','age','2'];
// var filter = _.uniq(data);
// console.log(filter);
// console.log(_.isString('khizar'));










//problem 2


// const calculateCircleArea = function(a){
//     return 3.14 * a * a;
// }
// var result=calculateCircleArea(7);
// console.log(result);

//problem 3
// function performOperation(num1, num2, operationCallback) {
//     return operationCallback(num1, num2);
//     }
//     function add(x, y) {
//     return x + y;
//     }
//     function subtract(x, y) {
//     return x - y;
//     }
//     function multiply(x, y) {
//     return x * y;
//     }
//     function divide(x, y) {
//     return x / y;
//     }
//     console.log(performOperation(10, 5, add)); // Output: 15
//     console.log(performOperation(10, 5, subtract)); // Output: 5
//     console.log(performOperation(10, 5, multiply)); // Output: 50
//     console.log(performOperation(10, 5, divide));

    //problem 4
    // var fs = require('fs');
    // fs.readFile('notes.txt' ,'utf8', (err, data) => {
    //     if (err) {
    //       console.error('Error reading the file:', err);
    //       return;
    //     }
      
    //     console.log('Contents of notes.txt:');
    //     console.log(data);
    //   });
    
    //problem 5
    // const os = require('os');
    // console.log("Total Memory:", os.totalmem());
    // console.log("Free Memory:", os.freemem());
    // console.log("Platform:", os.platform());
    // console.log("Number of CPU Cores:", os.cpus().length);


    //problem 6
    const _ = require('lodash');
    function sumOfEvenNumbers(nums) {
    var even = _.filter(nums,num => num %2 === 0);
    return _.sumBy(even);
    }

    var nums = [1,2,3,4,5,6,7,8,9,10];
    
    console.log(sumOfEvenNumbers(nums));



