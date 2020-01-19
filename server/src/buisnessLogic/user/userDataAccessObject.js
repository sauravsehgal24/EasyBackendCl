const User = require('./User');

const createOne = (req) => User.createOne(req);

const authenticateLogin = (email,password) => User.authenticateLogin(email,password);

module.exports = {
    createOne,
    authenticateLogin,
}