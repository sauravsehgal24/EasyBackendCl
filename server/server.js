const express = require('express')
const app = express()
const port = 3001
require('dotenv').config();
var fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

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





