const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const { environment } = require('./config');
const isProduction = environment === 'production';


const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());


// Security Middleware

// Use cors in development
if (!isProduction) app.use(cors());

// helmet sets a variety of security headers
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Set the _csrf token and create req.csrfToken method
app.use(csurf({
    cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
    }
}));


// Routes

app.use(routes);

module.exports = app;
