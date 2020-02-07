
const getSqlConnection = require('../../config/connectionPool');
const Query = require('../../queries/userQueries');

const bcrypt = require('bcryptjs');
const Promise = require('bluebird');

// const transporter = require('../config/smtpTransporter');
const response = require('../../config/httpResponses');

class User {

  // Create User
  static createOne(req) {
    console.log('inside create one ');
    const {username, email, password} = req.body;
    const values = [
        username,
        email,
      ];

      return bcrypt.hash(password, 10)
      .then((hash) => {
        values.push(hash);

        // Promise which resolves to a query
       return Promise.using(
          getSqlConnection(),
          conn => conn.query(Query.insertOne, values),
          )
            .then(() => 
            {
                return Promise.using(
                    getSqlConnection(),
                    conn=>conn.query(Query.findUserByUsername, [username])
                  )
                  .then((resultUser)=>{
                    console.log(`resultUser = ${resultUser[0].userId}`);
                    return resultUser;
                  })
                  
            })
            .catch((err) => {
              throw err;
            });
          });
  }

  static authenticateLogin(email,password){

    return Promise.using(
      getSqlConnection(),
      conn=>conn.query(Query.findUserByEmail, [email])
    )
    .then((resultUser)=>{
      if(!resultUser || resultUser.length === 0) return response.Unauthorized;

      const passwordFromDb = resultUser[0].password;

         return bcrypt.compare(password, passwordFromDb)
        .then((result)=>{
          console.log(`is password correct: ${result}`);
          if(!result) return response.Unauthorized;
          return resultUser[0];
        })
        
    })
    .catch((err)=>{
      throw err;
    })
  
  }


}

module.exports = User;