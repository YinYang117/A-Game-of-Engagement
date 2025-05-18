const { validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// https://express-validator.github.io/docs/api/validation-result/#validationresult
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  // errors
  if (!validationErrors.isEmpty()) {
    const errors = {};
    validationErrors
      .array()
      .forEach(error => errors[error.path] = error.msg);

    const err = Error("Bad request.");
    err.errors = errors;
    err.status = 400;
    err.title = "Bad request.";
    next(err);
  }

  // no errors
  next();
};




module.exports = { handleValidationErrors };