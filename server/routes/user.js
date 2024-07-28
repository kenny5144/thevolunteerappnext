const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const prisma = require("../db");

const router = express.Router();

module.exports = function(authMiddleware) {
  router.get("/", async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
      if (err) {
        return res.status(401).json({
          name: 'TokenExpiredError',
          message: 'jwt expired'
        });
      } else {
        return res.status(200).json({
          name: 'TokenSuccess',
          message: 'Token Active'
        });
      }
    });
  });

  router.get("/user", authMiddleware, async (req, res) => {
    // console.log(user);
    res.json({ user: req.user });
  });

  router.post("/register", async (req, res) => {
    try {
      const { email, name, password, UserRole } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const existingUser = await prisma.user.findFirst({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ message: 'Email already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: { email, name, password: hashedPassword, role: UserRole }
      });

      // Ensure environment variable is set
      if (!process.env.JWT_SECRET) {
        console.error("JWT_SECRET environment variable is not set.");
        return res.status(500).json({ message: "Server configuration error." });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '23h' });

      res.status(201).json({ message: 'User registered successfully', token, role: UserRole });
    } catch (error) {
      console.error("Error during registration:", error); // Log the actual error for debugging
      res.status(500).json({ message: 'Registration failed' });
    }
  });

  router.delete("/", authMiddleware, async (req, res) => {
    try {
      await prisma.user.delete({ where: { id: req.user.id } });
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error during user deletion:", error);
      res.status(500).json({ message: 'User deletion failed' });
    }
  });

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '23h' });

      res.status(200).json({ token });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: 'Error logging in' });
    }
  });

  router.post("/logout", async function(req, res) {
    res.status(200).json({ message: 'User logged out successfully' });
  });

  return router;
};
