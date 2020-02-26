const express = require('express');
const authRouter = express.Router();

const User = require('../models/users.js');
const basicAuth = require('../middleware/basicAuth')


authRouter.get('/', (req, res) => {
  res.send('it lives');
});

authRouter.post('/signup', (req, res, next) => {
  // expects the user to send a username and password
  // take that username and password and make a new user
  // with it
  const user = new User(req.body)
  user.save()
    .then(result => res.status(200).json({ token: user.generateToken() }))
    .catch(next)
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  res.status(200).json({ token: req.token })
});
// unprotected version:
// authRouter.post('/signin', (req, res, next) => {
//   res.status(200).json({message: 'ok'})
// });

authRouter.get('/users', async (req, res, next) => {
  // send all users
  const allUsers = await User.find({});
  res.status(200).json(this.allUsers);
});

module.exports = authRouter;
