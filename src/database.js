const mongoose = require('mongoose');

const URI = process.env.MONGODB_URL;

mongoose.connect(URI)
    .then(db => console.log('Banco conectado'))
    .catch(err => console.error(err));

module.exports = mongoose;
