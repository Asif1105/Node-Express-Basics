const express = require('express');
const path = require('path');
const routes = require('./routes');
const port = 3000;

const app = express();

app.set('views', path.join(__dirname, './src'));
app.set('view engine', 'jade');

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/', routes);

app.listen(process.env.port || 3000);

module.exports = app;