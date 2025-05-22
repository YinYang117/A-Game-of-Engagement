// This file handles user routes
// CRUD: registration, information, edits, and deletion logic is handled in the controllers
// Authentication and authorization are handled in the routes/api/auth.js file.
const express = require('express');
const router = express.Router();
const {  restoreUser } = require('../utils/auth');
const { signup } = require('../../controllers/api/userController');
const { validateSignup } = require('../utils/validation');


// Sign-up new User
router.post('/', validateSignup, signup);

// // Get current user
// router.get('/', )

// // Edit current user
// router.put('/', )

// // Delete current user
// router.delete('/', )

module.exports = router;