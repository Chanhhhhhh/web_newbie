const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars')
// import { handlebars } from 'express-handlebars';

const app = express();
const port = 3000

// khai bao anh join public, static files
app.use(express.static(path.join(__dirname,'public')))
// HTTP logger
app.use(morgan('combined'));
// template engine
// app.engine("handlebars",handlebars({defaultLayout:'main'}));
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// console.log(__dirname)
app.get('/', (req, res) => {
  res.render('new');
})

app.get('/oldpiece', (req, res) => {
  res.render('old');
})
// dinh nghia tuyen duong trang web
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})