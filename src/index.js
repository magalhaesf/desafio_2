const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const app = express();

// Settings
app.set('port', process.env.PORT || '3000');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/photos', require('./routes/photos.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'public', 'photos')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Servidor na porta ${app.get('port')}`);
});