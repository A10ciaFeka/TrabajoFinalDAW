const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const myConnection = require('express-myconnection');
const mysql = require('mysql');
const dbConfig = require('./dbConfig')

// routes imports
const userRoutes = require('./routes/user');

// configurations
app.set('port', process.env.PORT||3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,dbConfig,'single'));

// routes
app.use('/user', userRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Server start
app.listen(app.get('port'), () => {
    console.log('Server on port '+app.get('port'));
});