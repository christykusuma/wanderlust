// Import express library
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// Order matters: put user model in before trying to take it out
require('./models/User');

// Require the city model
require('./models/City');

require('./services/passport');

const bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI);

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Use cookie session
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/authRoutes');
// Could have done:  require('../routes/authRoutes')(app);
authRoutes(app);

// Require city routes
require('./routes/cityRoutes')(app);

// Dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
