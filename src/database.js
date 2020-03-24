const mongoose = require('mongoose');

const URI = 'mongodb+srv://ptn:ptn123@cluster0-gfimd.mongodb.net/plathanus?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('Banco conectado'))
    .catch(err => console.error(err));

module.exports = mongoose;
