const jwt = require('jsonwebtoken');
const response = require('../../config/httpResponses');

// Ensures the existence of a jwt
const ensureToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization;

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(response.Forbidden.status).json({
      message: response.Forbidden.message,
    });
  }
};

// Verifies the validity of a jwt
const verifyToken = (req, res, next) => {
  jwt.verify(
    req.token,
    process.env.JWT_SECRET,
    { issuer: 'EasyBackendCl' },
    (err, data) => {
      if (err) {
        res.status(response.Forbidden.status).json({
          message: err.message,
          at: err.expiredAt,
        });
      } else {
        req.user = data;
        next();
      }
    },
  );
};

module.exports = {
  ensureToken,
  verifyToken,
};
