const CustomError = require('./custom-error');

class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(message, code) {
    super(message);
    this.code = code;
  }

  serializeErrors() {
    return [{ message: this.message, code: this.code }];
  }
}

module.exports = BadRequestError;
