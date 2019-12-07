var sqlTemplates = require('./templates');

// var fields = [
//     {
//         fieldName:"id",
//         fieldType:"varchar(200)"
//     },
//     {
//         fieldName:"name",
//         fieldType:"varchar(200)"
//     },
//     {
//         fieldName:"email",
//         fieldType:"varchar(200)"
//     }
// ];

class SqlGenerator {

    //replaces the default creds with new ones
    static createWholeSqlCredsAndDb(creds){

        let {dbUser,dbPassword,dbName} = creds;
        var output="";

        output = sqlTemplates.createWhole.replace(/username/g,dbUser);
        output = output.replace(/password/g,dbPassword);
        output = output.replace(/dbname/g,dbName);
        return output;
        
    }

    //creates a Create Table SQL Command via recursion
    static createTableSqlCommand(index,fieldsArray,outputTest){

        if(index < fieldsArray.length){
            if(!outputTest){
                prevCmd = `CREATE TABLE test(`;
                outputTest= prevCmd;
                return createTableSqlCommand(index,fieldsArray,outputTest);
            }
            else{
                outputTest+=` ${fieldsArray[index].fieldName} ${fieldsArray[index].fieldType}${index==fieldsArray.length-1 ? '':','}`;
                index++;
                
                return createTableSqlCommand(index,fieldsArray,outputTest);
            }
        }
        else{
           return `${outputTest});`;
        }
    
    }

}

module.exports = SqlGenerator;