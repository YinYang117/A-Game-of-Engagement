// This file handles user CRUD: registration, information, edits, and deletion.
// Authentication and authorization are handled in the routes/api/auth.js file.

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../../db/models');
const { User } = db;
const { Op } = require('sequelize');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { requireAuth } = require('../../utils/auth');
const { asyncHandler } = require('../../utils/auth');

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.create({ email, password });
    setTokenCookie(res, user);

    return res.json({
      user: {
        id: user.id,
        email: user.email,
      },
    });
  })
);