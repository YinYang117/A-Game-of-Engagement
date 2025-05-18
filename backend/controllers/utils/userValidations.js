const { check } = require('express-validator');


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

module.exports = { validateSignup };