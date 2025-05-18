const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db/models');
const { Op } = require('sequelize');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../utils/validation');
const { setTokenCookie } = require('../utils/auth');
const { login, logout } = require('../../controllers/api/sessionController');

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


// Current User
router.get('/', (req, res) => {
    const { user } = req;
    if (user) {
        const { id, email, username } = user;
        const safeUser = { id, email, username };

        return res.json({ user: safeUser });
    } else {
        return res.json({ user: null });
    }
});


// Login
router.post('/', validateLogin, login )


// Logout
router.delete('/', logout )

module.exports = router;