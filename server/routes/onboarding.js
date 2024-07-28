const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = function(authMiddleware) {
  const router = express.Router();

  // Route to get user onboarding information
  router.get('/user/onboarding-info', authMiddleware, async (req, res) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        include: {
          organization: true,
          counselor: true,
          student: true,
        },
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch user data' });
    }
  });

  // Route to onboard an organization
  router.post('/onboard/organization', authMiddleware, async (req, res) => {
    const { type, yearFounded, gender, bio } = req.body;

    try {
      const user = await prisma.user.update({
        where: { id: req.user.id },
        data: {
          organization: {
            create: {
              type,
              yearFounded,
              gender,
              bio,
              onboarded: true
            }
          }
        }
      });

      res.status(201).json({ message: 'Organization onboarded successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Onboarding failed' });
    }
  });

  // Route to onboard a counselor
  router.post('/onboard/counselor', authMiddleware, async (req, res) => {
    const { school, bio, gender } = req.body;

    try {
      const user = await prisma.user.update({
        where: { id: req.user.id },
        data: {
          counselor: {
            create: {
              school,
              bio,
              gender,
              onboarded: true
            }
          }
        }
      });

      res.status(201).json({ message: 'Counselor onboarded successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Onboarding failed' });
    }
  });

  // Route to onboard a student
  router.post('/onboard/student', authMiddleware, async (req, res) => {
    const { school, bio, gender, grade, graduationYear, studentId } = req.body;

    try {
      const user = await prisma.user.update({
        where: { id: req.user.id },
        data: {
          student: {
            create: {
              school,
              bio,
              gender,
              grade,
              graduationYear,
              studentId,
              onboarded: true
            }
          }
        }
      });

      res.status(201).json({ message: 'Student onboarded successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Onboarding failed' });
    }
  });

  return router;
};
