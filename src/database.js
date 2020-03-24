const mongoose = require('mongoose');

const URI = 'mongodb://localhost/plathanus';

mongoose.connect(URI)
    .then(db => console.log('Banco conectado'))
    .catch(err => console.error(err));

module.exports = mongoose;