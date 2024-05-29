const router = require('express').Router();

// // Add a XSRF-TOKEN cookie return in json during development
// // Currently no measures to stop it from working in production
// router.get("/csrf/restore", (req, res) => {
//     const csrfToken = req.csrfToken();
//     res.cookie("XSRF-TOKEN", csrfToken);
//     res.status(200).json({
//         'XSRF-Token': csrfToken
//     });
// });

module.exports = router;