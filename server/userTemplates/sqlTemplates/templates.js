

module.exports = {

    createWhole:`

CREATE USER "username" IDENTIFIED BY "password";
    
CREATE DATABASE dbname

GRANT ALL ON dbname.* to username;

FLUSH PRIVILEGES;

USE dbname
    `,

    createUser:`CREATE USER "username" IDENTIFIED BY "password";\n`,

    createDatabase:`CREATE DATABASE dbname\n`,

    grantPrivileges:`GRANT ALL ON dbname.* to username; \nFLUSH PRIVILEGES;\n`,

    useDatabase:`USE dbname\n`,


}

