const { check, validationResult } = require('express-validator');

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


const validateSignup = [
    check('email')
        .isLength({ min: 5 })
        .withMessage('Email must be at least 5 characters'),
    check('email')
        .isLength({ max: 255 })
        .withMessage('Email must be 255 characters or less'),
    check('email')
        .isEmail()
        .withMessage('Invalid email'),
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Username is required'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email'),
    check('username')
        .isLength({ min: 2 })
        .withMessage('Username must be at least 2 characters'),
    check('username')
        .isLength({ max: 50 })
        .withMessage('Username must be 50 characters or less'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Password is required'),
    handleValidationErrors
];


const validateLogin = [
    // Allow a user to provide email or username for login
    check('credential')
        .notEmpty()
        .withMessage('Email or username is required'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Password is required'),
    handleValidationErrors
];

module.exports = { handleValidationErrors, validateSignup, validateLogin };