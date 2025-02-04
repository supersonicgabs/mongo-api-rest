const express = require('express');

module.exports = function (server){
    //API Routes
    const router = express.Router();
    server.use('/api', router);

    //Registering API methods in router
    const itemService = require('../itens/itemService');
    itemService.register(router, '/item');
}