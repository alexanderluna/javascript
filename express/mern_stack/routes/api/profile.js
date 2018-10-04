import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import User from '../../models/User';
import validProfileInput from '../../validation/profile';

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  try {
    const errors = {};
    const user = await User.findById(req.user.id);

    if (user.profile) return res.json(user);

    errors.no_profile = 'No profile found';
    res.status(404).json(errors)
  } catch (err) {
    next(err)
  }
});

router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const errors = {};
  const updatedInfo = {
    skills: req.body.skills,
    githubusername: req.body.githubusername,
    location: req.body.location,
    status: req.body.status,
    company: req.body.company,
    website: req.body.website,
    bio: req.body.bio,
    profile: req.body.profile,
    handle: req.body.handle,
    profile: true
  };

  const user = await User.findById(req.user.id);
  const handleTaken = await User.findOne({ handle: updatedInfo.handle });

  if (handleTaken && handleTaken.id !== user.id) {
    errors.handle = 'This handle is taken';
    res.status(400).json(errors);
  }

  user.set(updatedInfo);
  const updatedUser = await user.save();
  return res.json(updatedUser);
});

export default router;