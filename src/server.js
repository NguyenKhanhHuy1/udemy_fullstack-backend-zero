require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

// import express from 'express';
const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;


//cofig viewrngine
configViewEngine(app);
// khai bao routes
app.use('/', webRoutes);


//test connection


connection.query(
    'SELECT * FROM Users;',
    function (err, results, fields) {
        console.log('>>>result=', results);

    }

);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})