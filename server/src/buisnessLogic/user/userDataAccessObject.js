const User = require('./User');

const createOne = (req) => User.createOne(req);

module.exports = {
    createOne,
}