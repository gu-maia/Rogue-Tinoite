const express = require('express');
const UserController = require('./controllers/UserController');
const LikeController = require('./controllers/LikesController')

const routes = express.Router()

routes.get('/index', UserController.index)
routes.post('/users', UserController.store)

routes.get('/likes', LikeController.index)
routes.post('/likes', LikeController.store)

routes.get('/users/matches/:id', LikeController.getmatchesof)

module.exports = routes;
