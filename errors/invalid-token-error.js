const CustomError = require('./custom-error');

class InvalidTokenError extends CustomError {
  statusCode = 401;

  constructor(message) {
    super(message);
  }

  serializeErrors() {
    return [{ message: this.message, code: 'INVALID_TOKEN_ERROR' }];
  }
}

module.exports = InvalidTokenError;
