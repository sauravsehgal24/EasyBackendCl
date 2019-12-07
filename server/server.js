const express = require('express')
const app = express()
const port = 3001
require('dotenv').config();
var path = require('path');
var fs = require('fs');
var SqlGenerator = require('./userTemplates/sqlTemplates/sqlCmdGenerator');

let output = SqlGenerator.createWholeSqlCredsAndDb({dbUser:'saurav',dbPassword:'saurav123456',dbName:'test'});

console.log(output);

// var filePath = path.join(__dirname,'userTemplates','sqlTemplates','createDB.txt');
// console.log(filePath);



//once file reading is done it uses a callback method to res back to client
// fs.readFile(filePath,'utf-8',(err,data)=>{
//     if(err) throw err;

//         var result = data.replace(/db/g,'testDatabase');
//         result += `\n${createTable} \n\n${createTable}`;
//         console.log(result);
//         // fs.writeFile('newDb.sql', result, 'utf8', function (err) {
//         //     if (err) return console.log(err);

           

//         //  });

        
// });






app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Easy BackEnd Server listening on port ${port}!`))