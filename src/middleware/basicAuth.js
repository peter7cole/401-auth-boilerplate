
const base64 = require('base-64')
const User = require('../models/users.js')

function basicAuth(req, res, next) {
  // check if we have an authorization header
  if (!req.headers.authorization) {
    next(new Error('No authorization header '))
  }

  // if we have an authorization header, then get the username and password out of the base64 encoded header
  // Basic Auth header looks like "Basic adgasg"
  // split on ' ' so you get ['Basic', 'adgasg']
  // pop gives you the second index

  const basic = req.headers.authorization.split(' ').pop();
  const decoded = base64.decode(basic) // gives us user:pass
  const [user, pass] = decoded.split(':')

  return User.authenticateBasic(user, pass)
    .then(_validate)

  function _validate(user) {
    if (user) {
      req.user = user
      req.token = user.generateToken()
      next()
    } else {
      next(new Error('u messed up'))
    }
  }
}

module.exports = basicAuth;
