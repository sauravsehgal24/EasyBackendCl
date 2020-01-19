module.exports = {

    insertOne: 'INSERT INTO users (userId, username, email, password) VALUES (uuid(), ?, ?, ?)',

    findIdByUsername: 'SELECT userId FROM users WHERE username = ?',
    
    findUserByUsername: 'SELECT * FROM users WHERE username = ?',

    findUserByEmail: 'SELECT * FROM users WHERE email = ?',
  };