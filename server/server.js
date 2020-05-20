const express = require('express')
const app = express()
const port = 3001
require('dotenv').config();
var fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
var SqlGenerator = require('./src/buisnessLogic/codeFileGenerator/sql/sqlCmdGenerator');

//initialization
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/* ----- routes ----- */
const api = require('./src/api/rootRouter');
app.use(`/api`, api);

/* ----- Static Routes ----- */
const uploadsServe = express.static(path.resolve(__dirname, 'uploads'));
app.use('/uploads', uploadsServe);

app.use('/', express.static(path.resolve(__dirname, '../client/build')))
app.listen(port, () => console.log(`EasyBackendCl Server listening on port ${port}!`))

//just testing if the sql template is generated -> it works
// let sqlFileTemplate = SqlGenerator.generateSqlFileTemplate({dbUser:'saurav',dbPassword:'saurav123456',dbName:'test'},
//     [
//         {
//             tableName:"t1",
//             tableFields:[
//                 {
//                     fieldName:"c1",
//                     fieldType:"varchar(200)",
//                     constraint:"PRIMARY KEY"
//                 },
//                 {
//                     fieldName:"c2",
//                     fieldType:"varchar(200)",
//                     constraint:"NOT NULL"
//                 },
//                 {
//                     fieldName:"c3",
//                     fieldType:"varchar(200)"
//                 }
//             ]
//         },

//         {
//             tableName:"t2",
//             tableFields:[
//                 {
//                     fieldName:"c21",
//                     fieldType:"varchar(200)"
//                 },
//                 {
//                     fieldName:"c22",
//                     fieldType:"varchar(200)"
//                 },
//                 {
//                     fieldName:"c23",
//                     fieldType:"varchar(200)"
//                 }
//             ],
//             externalConstraint:"FOREIGN KEY(c2) REFERENCES t1(c1)"
//         }
//     ]
// );

// console.log(sqlFileTemplate);

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

// Just testing if it works -> it works
// fs.writeFile('./userApps/sampleUser1/newSchema.sql', sqlFileTemplate, 'utf8', function (err) {

//     if(err) return err;

// });





