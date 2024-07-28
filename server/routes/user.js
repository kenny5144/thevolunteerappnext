const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const prisma = require("../db");

const router = express.Router();






module.exports = function(authMiddleware){
    router.get("/",async (req, res)=>{
      const token = req.headers.authorization.split(" ")[1]
      jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) {
         res.status(401).json({   name: 'TokenExpiredError',
         message: 'jwt expired'})
        }else{
    
          res.status(200).json({   name: 'TokenSuccess',
         message: 'Token Acitive'})
        }
      })
    
    
    })
    router.get("/user",authMiddleware,async (req, res) => {
      res.json({user:req.user})
    })

    router.post("/register", async (req, res) => {
    
      
        try {
          const { email,name, password, UserRole } = req.body;
        
          // Validate input and ensure uniqueness
          if (!email || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
          }
      
          const existingUser = await prisma.user.findFirst({ where: { email:email } });
         
          if (existingUser) {
            return res.status(409).json({ message: 'email already exists' });
          }
      
          // Hash password securely (at least 10 rounds)
          const hashedPassword = await bcrypt.hash(password, 10);
      
          // Create new user in Prisma
          const user = await prisma.user.create({
            data: { email:email,name:name, password: hashedPassword, role:UserRole}
          });
   
          // Optionally generate a JWT token (avoid storing full credentials in token)
          // and send it as a response (not in body for security)
          const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '23h' });
      
          res.status(201).json({ message: 'User registered successfully', token, role:role}); // Securely send token in header
        } catch (error) {
          console.error(error); // Log error for debugging
          res.status(500).json({ message: 'Registration failed' });
        }
      });
      router.delete("/",authMiddleware,async (req, res) => {
              await prisma.user.delete({where:{id:req.user.id}})
              res.status(200).json({message:"User deleted successfully"})


      })
    router.post('/login', async (req, res) => {
        const { email, password } = req.body;
      
        try {
          // Find user by username
          const user = await prisma.user.findUnique({ where: { email } });
      
          if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }
      
          // Generate JWT token with user ID
          const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '23h' }); // Adjust expiration as needed
      
          res.status(200).json({ token});
        } catch (error) {
          res.status(500).json({ message: 'Error logging in' });
        }
      });
    
   
   
    router.post("/logout", async function (req, res, next) {
    
    })
    return router
}