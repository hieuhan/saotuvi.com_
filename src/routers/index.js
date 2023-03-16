const express = require('express');
const routers = express.Router();

//routers.use(require('./dashboard.router'));
routers.use(require('./home.router'));
//routers.use(require('./user.router'));

module.exports = routers;