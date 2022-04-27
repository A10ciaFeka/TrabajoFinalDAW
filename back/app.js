const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const myConnection = require('express-myconnection');
const mysql = require('mysql');
const dbConfig = require('./dbConfig');

// importaciones de las rutas.
const usuarioRoutes = require('./routes/usuarioRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const productoRoutes = require('./routes/productoRoutes');

// configuraciones
app.set('port', process.env.PORT||3000);

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,dbConfig,'single'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// rutas
app.use('/usuario', usuarioRoutes);
app.use('/review', reviewRoutes);
app.use('/producto',productoRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Server start
app.listen(app.get('port'), () => {
    console.log('Server en puerto '+app.get('port'));
});