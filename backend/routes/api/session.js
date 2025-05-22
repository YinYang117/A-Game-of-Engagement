const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db/models');
const { Op } = require('sequelize');
const { handleValidationErrors, validateLogin } = require('../utils/validation');
// const { setTokenCookie } = require('../utils/auth');
const { login, logout } = require('../../controllers/api/sessionController');



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