var sqlTemplates = require('../../../templates/sqlTemplates');

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
    static createTableSqlCommand(index,tableName,fieldsArray,outputTest){

        if(index < fieldsArray.length){
            if(!outputTest){
                let prevCmd = `CREATE TABLE ${tableName}(`;
                outputTest= prevCmd;
                return this.createTableSqlCommand(index,tableName,fieldsArray,outputTest);
            }
            else{
                outputTest+=`${fieldsArray[index]} ${fieldsArray[index].fieldType ? fieldsArray[index].fieldType : 'varchar(20)'} ${fieldsArray[index].constraint ? fieldsArray[index].constraint:''}${index==fieldsArray.length-1 ? '':','}`;
                index++;
                
                return this.createTableSqlCommand(index,tableName,fieldsArray,outputTest);
            }
        }
        else{
           return `${outputTest}`;
        }
    
    }

    static generateSqlFileTemplate(creds,metadata){
        let credsOutput =  this.createWholeSqlCredsAndDb(creds);
        var tablesOutput=``;
        metadata.forEach(e=>{
            tablesOutput += `${this.createTableSqlCommand(0,e.entityName,e.inputFields,null)} ${e.externalConstraint ? ', '+e.externalConstraint+');' : ');'} \n\n`;
        });
        return `${credsOutput} \n${tablesOutput}`
    }
}

module.exports = SqlGenerator;