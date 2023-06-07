const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars')
// import { handlebars } from 'express-handlebars';

const app = express();
const port = 3000

// khai bao anh join public, static files(file tinh)
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
  extended: true}
));
app.use(express.json());
// HTTP logger
// app.use(morgan('combined'));
// template engine
// app.engine("handlebars",handlebars({defaultLayout:'main'}));
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// console.log(__dirname)
app.get('/', (req, res) => {
  res.render('new');
})
// dinh nghia tuyen duong trang web, basic route
app.get('/oldpiece', (req, res) => {
  res.render('old');
})

app.get('/search', (req, res) => {
  //  console.log(req.query); // trich xuat value  cua query parameter
  res.render('search');
})

app.post('/search', (req, res) => {
  console.log(req.body.q); // lay du lieu tren form date
  res.send('');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})