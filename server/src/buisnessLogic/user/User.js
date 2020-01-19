
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
    console.log(`password: ${password}`);
    const values = [
        username,
        email,
      ];

      return bcrypt.hash(password, 10)
      .then((hash) => {
        console.log(`hash: ${hash}`);
        values.push(hash);

        // Promise which resolves to a query
        Promise.using(
          getSqlConnection(),
          conn => conn.query(Query.insertOne, values),
        );
      })
      .then(() => 
      {
        return Promise.using(
        getSqlConnection(),
        conn => conn.query(Query.findIdByUsername, [username]),
      )})
          .then((result) => {

            if (result.length === 0) {
              Promise.reject(response.ServerError);
            }

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



  }

}

module.exports = User;