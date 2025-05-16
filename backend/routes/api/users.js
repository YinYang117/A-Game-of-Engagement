// This file handles user CRUD: registration, information, edits, and deletion.
// Authentication and authorization are handled in the routes/api/auth.js file.
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const bcrypt = require('bcrypt');
const { User } = db;
const { Op } = require('sequelize');
const { setTokenCookie, restoreUser } = require('../../utilities/auth');
const { handleValidationErrors } = require('../utils/validation');


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


// Sign-up new User
router.post('/', validateSignup, async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password);

    const isExistingUser = await User.findOne({
        where: {
            [Op.or]: [{ email: email }, { username: username }],
        },
    })

    if (isExistingUser) {
        const isEmail = email === isExistingUser.email;
        const isUsername = username === isExistingUser.username;
        const errObj = { message: 'User already exists', errors: {}};

        if (isUsername) errObj.errors.username = 'User with that username already exists';
        if (isEmail) errObj.errors.email = 'User with that email already exists';
        res.json(errObj);
    }

    const newUser = await User.create({
        username, email, hashedPassword
    })

    const safeUser = {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
    }

    setTokenCookie(res, safeUser)

    res.json(safeUser)
});


// Get current user
router.get('/', async (req, res, next) => {

})

// Edit current user
router.put('/', async (req, res, next) => {
    
})

// Delete current user
router.delete('/', async (req, res, next) => {
    
})


module.exports = router;