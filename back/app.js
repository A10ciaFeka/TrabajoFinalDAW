const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const myConnection = require('express-myconnection');
const mysql = require('mysql');
const dbConfig = require('./dbConfig')

// importación de rutas
const rutasUsuarios = require('./routes/usuario')

// configuraciones
app.set('port', process.env.PORT||3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,dbConfig,'single'));

// rutas
app.use('/', rutasUsuarios)

// archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server en el puerto '+app.get('port'));
});