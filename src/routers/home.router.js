const express = require('express');
const routers = express.Router();
const homeController = require('../controllers/home.controller');

routers.get('/', homeController.index);

module.exports = routers;
