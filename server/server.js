require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
const path = require('path');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

app.use(cors());
app.options('*', cors());

app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {

    console.log('Escuchando en Puerto', process.env.PORT);
});

mongoose.connect('mongodb://localhost:27017/tienda', (err, res) => {
    if (err) throw err;
    console.log("Base de datos ONLINE");
});

//mongodb + srv: //kleber:<PASSWORD>@cluster0-qbw4d.mongodb.net/test?retryWrites=true


/* 'mongodb://localhost:27017/tienda'*/
/*mongoose.connect('mongodb+srv://kleberdiazc:kleberdiazc@cluster0-geu6m.mongodb.net/tiendaonline?retryWrites=true', (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});*/

/*MongoClient.connect('', function(err, db) {
    db.close();
 });*/


// replace the uri string with your connection string.
/*const uri = "mongodb+srv://kleber:kleber@cluster0-qbw4d.mongodb.net/tienda"
MongoClient.connect(uri, function(err, client) {
    if (err) {
         console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
    }else{
        console.log('Connected...');
    }
    
});*/