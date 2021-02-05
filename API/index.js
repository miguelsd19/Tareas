const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

//Conectar a la Bd en Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/admintareas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
mongoose.set('debug', true);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());

app.listen(4000, () => {
    console.log('Servidor Funcionando');
});