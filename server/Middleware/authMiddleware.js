const LocalStrategy = require("passport-local").Strategy;
const BearerStrategy = require("passport-http-bearer").Strategy;
const prisma = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

function setUpPassportLocal(passport) {
  passport.use(new BearerStrategy(async (token, done) => {
    try {
      // Verify token authenticity and extract user ID
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.userId;

      // Fetch user data from Prisma
      const user = await prisma.user.findUnique({ where: { id: userId } });

      if (!user) {
        return done(null, false); // Invalid token or user not found
      }

      done(null, user);
    } catch (error) {
      done(error); // Handle errors gracefully
    }
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id); // Store only user ID in session (important for CSRF protection)
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await prisma.user.findUnique({ where: { id } });
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
}

function checkIfAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/login");
  }
}

module.exports = { checkIfAuthenticated, setUpPassportLocal };