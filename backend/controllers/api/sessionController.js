const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const db = require('../../db/models');
const { User } = db;
const { setTokenCookie } = require('../utils/auth');


const login = async (req, res, next) => {
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
};

const logout = async (_req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Successfully Logged Out' });
};

module.exports = {
  login,
  logout
};