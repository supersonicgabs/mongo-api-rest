const bodyParser = require('body-parser');
const express = require('express');
const server = express();

const port = 4000;

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.listen(process.env.PORT || port, ()=> console.log('Listening On'));

module.exports = server;