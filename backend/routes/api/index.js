const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const { restoreUser } = require('../utilities/auth');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);

// If valid user in session:
//  sets req.user to safeUser scope from db
// Else sets req.user to null
router.use(restoreUser);


router.get("/", (_req, res, _next) => {
    res.json("Welcome to the API");
});


// reset CSRF token, set the cookie, return XSRF-TOKEN cookie
router.get("/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
        'XSRF-Token': csrfToken
    });
});


module.exports = router;