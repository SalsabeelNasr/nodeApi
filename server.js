const express = require('express');
const MongoCleint = require('mongodb').MongoCleint;
const bodyParser = require('body-parser');


const app = express();
const port = 8000;

require('./app/routes')(app, {});

app.listen(port, () => {
    console.log('Salsabeel is awesome on port' + port)
});