const { User } =  require('../../db/models');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { setTokenCookie } = require('../../routes/utils/auth');
/*
    TODO:
    do I need to import like this?
    const db = require('../../db/models');
    const { User } = db;
*/


// Create a new user
const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password);

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
        username,
        email,
        passwordHash
    })

    const safeUser = {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
    }

    setTokenCookie(res, safeUser)

    res.json(safeUser)
};
// Find a user by email

// Find a user by username

// Find a user by ID

// Update a user by (id, or email, or username?)

// Delete a user by (id, or email, or username?)


module.exports = {
    signup,
    // findUserByEmail,
    // findUserByUsername,
    // findUserById,
    // updateUser,
    // deleteUser
}