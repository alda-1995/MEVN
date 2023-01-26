//soportado con babel js
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//application/form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Rutas
// app.get('/', function(req, res){
//     res.send('Hola mundo');
// });

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), function(){
    console.log("Escuchando el puerto 3000");
});