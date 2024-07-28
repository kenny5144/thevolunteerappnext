const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = function(authMiddleware) {
  const router = express.Router();

  router.post('/', authMiddleware, async (req, res) => {
    const { title, message } = req.body;

    try {
      const post = await prisma.post.create({
        data: {
          title,
          message,
          organization: {
            connect: { userId: req.user.id }
          }
        }
      });

      res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create post' });
    }
  });

  return router;
};
