import express from 'express';
const router = express.Router();

router.get('/test', (req, res) => {
  res.json({
    message: 'Entries API endpoint'
  })
});

export default router;