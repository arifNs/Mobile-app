
const readline = require('readline');

const rl = readline.createInterface({

input: process.stdin,

output: process.stdout

});


//Promp 3 question
rl.question('What is your name? ', (name) => {
    rl.question('What is your Matric Number? ', (matricNo) => {
        rl.question('What is your Major? ', (major) => {

            //Pass the parameter to Student.js
            let student = new myimport.Students(name, matricNo, major);
            console.log(student.display());
        
        //rl.close();
        //Used process.exit() in Student.js
        });
    });
});


const myimport = require('./Student.js');



