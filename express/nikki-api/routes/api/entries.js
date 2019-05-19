import express from 'express';
import Entry from '../../models/Entry';

const router = express.Router();

router.get('/', async (req, res) => {
  const entries = await Entry.find({});
  if (entries) {
    return res.json(entries);
  }
  return res.json({ message: 'didn\'t find entries' });
});

export default router;
