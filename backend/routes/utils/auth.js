// Login, Logout, and Authentication routes

const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../../config');
const { secret, expiresIn } = jwtConfig;
const { User } = require('../../db/models');


// create a jwt token and set it as a cookie in res after log-in or sign-up
const setTokenCookie = (res, user) => {
  const safeUser = {
    id: user.id,
    email: user.email,
    username: user.username,
  }

  // Create the token.
  const token = jwt.sign(
    { data: safeUser }, // payload, visible
    secret,             // env, not public
    { expiresIn: parseInt(expiresIn) }
  );

  const isProduction = process.env.NODE_ENV === "production";

  // Set the cookie under token key
  res.cookie('token', token, {
    maxAge: expiresIn * 1000, // expiresIn is in milliseconds, changing to seconds
    httpOnly: true, // not accessible with JS. Mitigates cross-site scripting (XSS)
    secure: isProduction,
    sameSite: isProduction && "Lax" // For cross-site request forgery (CSRF). Lax setting allows the cookie to be sent with same-site requests and top-level navigation GET requests, but not with third-party requests.
  });

  return token;
};


const restoreUser = (req, res, next) => {
  // jwt token cookie
  const { token } = req.cookies;
  req.user = null;

  // verify = https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) return next();

    try {
      const { id } = jwtPayload.data;
      // sets user key on req obj for easy access later
      req.user = await User.findByPk(id, {
        attributes: { include: ['email', 'createdAt', 'updatedAt'] }
      });
    } catch (e) {
      res.clearCookie('token');
      return next(); // don't need return val, just exit func
    }

    if (!req.user) res.clearCookie('token');

    return next();
  });
};


// Authentification = If no current user, return error
const requireAuth = function (req, _res, next) {
  if (req.user) return next();

  const err = new Error('Authentication required');
  err.message = 'Authentication required';
  err.status = 401;
  return next(err);
}


module.exports = { setTokenCookie, restoreUser, requireAuth };