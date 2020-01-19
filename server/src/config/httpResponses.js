const responses = {
    OK: {
      status: 200,
      message: 'Successful request.',
    },
    Created: {
      status: 201,
      message: 'Resource created.',
    },
    Accepted: {
      status: 202,
      message: 'Request accepted.',
    },
    NotModified: {
      status: 304,
      message: 'Not modified',
    },
    BadRequest: {
      status: 400,
      message: 'Bad request.',
    },
    Unauthorized: {
      status: 401,
      message: 'Unauthorized request.',
    },
    Forbidden: {
      status: 403,
      message: 'Forbidden request, please authorize.',
    },
    NotAcceptable: {
      status: 406,
      message: 'Unauthorized request.',
    },
    Conflict: {
      status: 409,
      message: 'The username you specified exists.',
    },
    Teapot: {
      status: 418,
      message: 'I\'m a teapot.',
    },
    ServerError: {
      status: 500,
      message: 'Internal server error.',
    },
  };
  
  module.exports = responses;
  