const Joi = require('joi');
const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, Object.keys(validSchema)); //object get value of req

  const { value, error } = Joi.compile(validSchema) // return a joi

    //abortEarly - when true, stops validation on the first error,
    //otherwise returns all the errors found. Defaults to true
    .prefs({ errors: { label: 'key' }, abortEarly: false })

    //Overrides the global validate() options for the current key and any sub-key where:
    //options - an object with the same optional keys as any.validate().
    .validate(object);

  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ');
    return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
