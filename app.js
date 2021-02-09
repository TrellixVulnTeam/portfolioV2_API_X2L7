const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();



const port = process.env.PORT || 3000;
const api = require('./routes/api')
const index = require('./routes/index');

require('./database'); // LIEN VERS LA BDD

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(index);




app.listen(port);
