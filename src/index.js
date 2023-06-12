const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
// import { handlebars } from 'express-handlebars';

const app = express();
const port = 2000;
const route = require('./routes');
// khai bao anh join public, static files(file tinh)
app.use(express.static(path.join(__dirname, 'public')));
app.use(
express.urlencoded({
extended: true,
}),
);
     app.use(express.json());
// HTTP logger
// app.use(morgan('combined'));
// template engine
// app.engine("handlebars",handlebars({defaultLayout:'main'}));
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
    app.set('view engine', 'hbs');
      app.set('views', path.join(__dirname, 'resources/views'));

   route(    app);

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});
