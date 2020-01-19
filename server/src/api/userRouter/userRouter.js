/**
 * --------------------  DESCRIPTION  --------------------
 *
 * This the router for /api/users.
 *
 * The server API is implemented within this file. Handles have been provided
 * in the descriptions to help locate a certain endpoint.
 *
 * Search handles:
 *     - top
 *
 *     - POST /api/users/
 *     - POST /api/users/authenticate
 * 
 *     - GET /api/users/{id}
 *
 *      - DELETE /api/user/{id}
 */

// libraries and dependencies
const express = require('express');
const jwt = require('jsonwebtoken');
const response = require('../../config/httpResponses');

// data objects
const User = require('../../buisnessLogic/user/userDataAccessObject');

// middleware
const {
  ensureToken,
  verifyToken,
} = require('../../buisnessLogic/middleware/authMiddleware');

const mailer = require('../../config/smtpTransporter');

const users = express.Router();

const tokenOptions = {
  algorithm: 'HS256',
  expiresIn: '1 hour',
  issuer: 'EasyBackendCl',
};

/*  -------------------- USERS ROUTER  --------------------  */

// Register a user given their username, password and role. Authorization
users.post('/', (req, res) => {
    const {
      body: { username,email },
    } = req;
  
      // Find if a user exists or not
   User.createOne(req)
      .then((user) => {
          console.log(`user inside userCreateOne: ${user[0]}`);
        if (!user) {
          return res.status(response.Conflict.status).json({
            message: response.Conflict.message,
          });
        }

        console.log(`username: ${user[0].username}`);
        // generate a new token for this user
        const {
          id,
          username,
          email,
        } = user[0];
  
        const payload = {
            id,
            username,
            email,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, tokenOptions);

        return res.status(response.Created.status).json({
          message: response.Created.message,
          token,
          user,
        });
      })
      .catch((err) => {
        if (err.status) {
          res.sendStatus(err.status);
        } else {
          res.sendStatus(response.ServerError.status);
        }
      });
  });

module.exports = users;