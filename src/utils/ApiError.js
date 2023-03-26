class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};

module.exports = ApiError;


// function MyError() {
//   // if you are calling this in constructor, instead of MyError, "this.constructor"
//   Error.captureStackTrace(this, MyError);
//   // Any other initialization goes here.
// }
// //Passing in MyError as a second argument means that the constructor call to MyError won’t show up in the stack trace.