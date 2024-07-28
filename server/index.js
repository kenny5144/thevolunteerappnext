const express = require("express");
const session = require("cookie-session");
const passport = require("passport");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();

const { setUpPassportLocal } = require("./middleware/authMiddleware");
const userRoutes = require('./routes/user.js');
const onboardingRoutes = require('./routes/onboarding.js');
const app = express();
const PORT = 8080;

const authMiddleware = passport.authenticate('bearer', { session: false });

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const logger = (req, _res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(`${time} ${req.method}: ${req.url}`);
    next();
};

app.use(logger);
app.use(
    session({
        secret: process.env.JWT_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

setUpPassportLocal(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use("/user", userRoutes(authMiddleware));
app.use("/onboarding", onboardingRoutes(authMiddleware))
// Root route
app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello World" });
    console.log("Welcome");
});

// Start server
const server = app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

module.exports = { app, server };