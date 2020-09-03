const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Hello world');




// const Person = require('./person'); //Common JS, other more Pythonic way is ES6

// const person1 = new Person('John', 30);

// //person1.greeting();

// const fs = require('fs');
// const path = require('path');

//create folder.  Asynchronous, takes in a callback
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log("Folder created");
// }); 


//Create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "hello world!", err => {
//     if(err) throw err;
//     console.log("File created and written to!");

//     //File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " I love nodejs", err => {
//         if(err) throw err;
//         console.log("File created and written to!");
//     }); 
// }); 

// Read File
// fs.readFile(path.join(__dirname, '/test', "hello.txt"), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// }); 

// const os = require('os');
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.uptime());