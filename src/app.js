const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
// import { handlebars } from 'express-handlebars';
const app = express();
const port = 3000;
const route = require('./routes');
const bodyParser = require('body-parser');
const session = require('express-session');

// khai bao anh join public, static files(file tinh)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
express.urlencoded({
extended: true,
}),
);
app.use(express.json());
app.use(
session({
secret: 'secret',
resave: true,
saveUninitialized: true,
}),
);
// HTTP logger
// app.use(morgan('combined'));
// template engine
// app.engine("handlebars",handlebars({defaultLayout:'main'}));
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});
