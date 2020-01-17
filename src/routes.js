const express = require('express');
const UserController = require('./controllers/UserController');
const MatcherController = require('./controllers/LikesController')

const routes = express.Router()

routes.get('/index', UserController.index)
routes.post('/users', UserController.store)

routes.post('/likes', MatcherController.store)

module.exports = routes;
