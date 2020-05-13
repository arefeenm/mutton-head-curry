'use strict';

const authenticator = require('../middlewares/authenticator');
const User = require('../../user');
const utils = require('../../utils');

module.exports = (app) => {
  app.patch('/api/users/:id', authenticator.requiresLogin, utils.wrapAsync(User.update));
  app.get('/api/users/:id', utils.wrapAsync(User.get));
  app.get('/api/users/', utils.wrapAsync(User.list));
  app.delete('/api/users/:id', authenticator.requiresLogin, utils.wrapAsync(User.remove));
  app.get('/api/users/logged-in', utils.wrapAsync(User.getCurrentUser));
  app.get('/api/auth/current-user', utils.wrapAsync(User.getCurrentUser));
};
