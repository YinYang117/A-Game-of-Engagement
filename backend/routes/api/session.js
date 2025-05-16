const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db/models');
const { Op } = require('sequelize');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../utils/validation');
const { setTokenCookie } = require('../utils/auth');

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
router.post('/', validateLogin, async (req, res, next) => {
    const { credential, password } = req.body;

    // Need unscoped to include hashedPassword
    const user = await User.unscoped().findOne({
        where: {
            [Op.or]: [
                {username: credential},
                {email: credential}
            ]
        }
    });

    if (!user) {
        let error = new Error('Log In Failed');
        error.title = 'Login failed';
        error.message = 'Invalid Credentials';
        error.status = 401;
        error.errors = { credentials: 'The provided credentials were invalid' };
        return next(error);
    };

    if (!bcrypt.compareSync(password, user.hashedPassword.toString())) {
        let error = new Error('Log In Failed');
        error.title = 'Login failed';
        error.message = 'Invalid Password';
        error.status = 401;
        error.errors = { password: 'The provided password was invalid' };
        return next(error);
    }

    // Recreate standard safeUser more efficient then hitting db for default scope
    const { id, email, username } = user;
    let safeUser = { id, email, username };
    setTokenCookie(res, safeUser);
    res.json({ user: safeUser });
})


// Logout
router.delete('/', async (_req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Succesfully Loged Out' });
})

module.exports = router;