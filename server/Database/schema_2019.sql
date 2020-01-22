-- CREATE DATABASE easybackenddb;
-- USE easybackenddb;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS entitydatabases;
DROP TABLE IF EXISTS models;
DROP TABLE IF EXISTS fields;
DROP TABLE IF EXISTS servers;
SET FOREIGN_KEY_CHECKS = 1;

-- Table users
-- **********************************************************

CREATE TABLE users (
 userId varchar(100) NOT NULL, 
 username varchar(100) NOT NULL,
 email varchar(100),
 password varchar(100) NOT NULL, 
 avatarUrl varchar(100) DEFAULT NULL, 
 PRIMARY KEY(`userId`),
 UNIQUE KEY `userId` (`userId`),
 UNIQUE KEY `username` (`username`),
 UNIQUE KEY `email` (`email`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table entitydatabases
-- **********************************************************

CREATE TABLE entitydatabases (
 databaseId varchar(50) NOT NULL, 
 userId varchar(50) NOT NULL,
 dbName varchar(50) NOT NULL,
 dbUser varchar(50),
 dbPassword varchar(50) NOT NULL, 
 conectionUrl varchar(50) DEFAULT NULL, 
 PRIMARY KEY(`databaseId`),
 UNIQUE KEY `databaseId` (`databaseId`),
 UNIQUE KEY `username` (`dbName`),
 CONSTRAINT `userIdKeyOnEntitydatabases` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table models
-- **********************************************************

CREATE TABLE models (
 modelId varchar(50) NOT NULL, 
 databaseId varchar(50) NOT NULL,
 modelName varchar(50) NOT NULL,
 PRIMARY KEY(`modelId`),
 UNIQUE KEY `modelId` (`modelId`),
 CONSTRAINT `databaseIdKeyOnModels` FOREIGN KEY (`databaseId`) REFERENCES `entitydatabases` (`databaseId`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table fields
-- **********************************************************

CREATE TABLE fields (
 fieldId varchar(50) NOT NULL, 
 modelId varchar(50) NOT NULL, 
 fieldName varchar(50) NOT NULL,
 fieldType varchar(50) NOT NULL,
 fieldConstraint varchar(50) DEFAULT NULL,
 PRIMARY KEY(`fieldId`),
 UNIQUE KEY `fieldId` (`fieldId`),
 CONSTRAINT `modelIdKeyOnFields` FOREIGN KEY (`modelId`) REFERENCES `models` (`modelId`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table servers
-- **********************************************************

CREATE TABLE servers (
 serverId varchar(50) NOT NULL, 
 userId varchar(50) NOT NULL, 
 databaseId varchar(50) NOT NULL,
 serverPort varchar(50) NOT NULL,
 serverUrl varchar(50) NOT NULL,
 PRIMARY KEY(`serverId`),
 UNIQUE KEY `serverId` (`serverId`),
 UNIQUE KEY `databaseId` (`databaseId`),
 UNIQUE KEY `serverUrl` (`serverUrl`),
 CONSTRAINT `userIdKeyOnServers` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE,
 CONSTRAINT `databaseIdKeyOnServers` FOREIGN KEY (`databaseId`) REFERENCES `models` (`databaseId`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;