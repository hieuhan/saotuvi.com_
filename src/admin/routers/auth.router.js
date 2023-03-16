const express = require('express');
const routers = express.Router();
const authController = require('../controllers/auth.controllers');

routers.get('/login', authController.login);
// routers.post('/login', authController.postLogin);
// routers.get('/profile', authController.profile);
// routers.get('/change-password', authController.changePassword);

module.exports = routers;
