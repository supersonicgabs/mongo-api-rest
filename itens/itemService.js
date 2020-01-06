const Item = require('./item');

//Create REST API, adds CRUD to Mongo's Schema
Item.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated
Item.updateOptions({new: true, runValidators: true});

module.exports = Item