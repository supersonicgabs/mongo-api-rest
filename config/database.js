const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb+srv://supersonicgabs:password@cluster0-c8fq9.mongodb.net/rest-api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})