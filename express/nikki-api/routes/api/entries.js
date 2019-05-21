import express from 'express';
import Entry from '../../models/Entry';

const router = express.Router();

router.get('/', async (req, res) => {
  const entries = await Entry.find({});
  if (entries) {
    return res.json(entries);
  }
  return res.json({ message: 'no entries founds' });
});

router.get('/:id', async (req, res) => {
  const entry = await Entry.findById(req.params.id);
  if (entry) {
    return res.json(entry);
  }
  return res.json({ message: 'no entry with that id' });
});

router.post('/', async (req, res) => {
  const { content } = req.body;
  if (!content) {
    res.json({ message: 'missing content' });
  }
  Entry.create({ content }, (err, entry) => {
    if (err) {
      return res.json({ message: 'error while creating entry' });
    }
    return res.json(entry);
  });
});

router.patch('/:id', async ({ body, params }, res) => {
  if (!body.content) {
    return res.json({ message: 'missing content' });
  }
  const entry = await Entry.findById(params.id);
  entry.content = body.content;
  const updatedEntry = await entry.save();
  return res.json(updatedEntry);
});

router.delete('/:id', async (req, res) => {
  const response = await Entry.deleteOne({ _id: req.params.id });
  if (response.deletedCount) {
    return res.json({ id: req.params.id });
  }
  return res.json({ message: 'failed to delete' });
});

export default router;
