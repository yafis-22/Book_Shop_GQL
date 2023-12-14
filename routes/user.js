import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import fs from 'fs/promises';
import path from 'path';

const router = express.Router();

// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// User data file path
const userDataPath = path.join(__dirname, '../user/userData.json');

// User routes
router.get('/', async (req, res) => {
  try {
    // Read user data from userData.json
    const userData = await fs.readFile(userDataPath, 'utf8');
    res.json(JSON.parse(userData));
  } catch (err) {
    console.error('Error reading user data:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Route to get a user by ID
router.get('/:id', async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const userData = await fs.readFile(userDataPath, 'utf8');
    const users = JSON.parse(userData);

    // Find the user by ID
    const user = users.find((user) => user.id === userId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    console.error('Error reading user data:', err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
