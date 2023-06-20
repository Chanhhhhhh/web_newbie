const onepieceRoute = require('./onepiece');
const siteRoute = require('./site');
const bookRoute = require('./book');
function route(app) {
app.use('/onepiece', onepieceRoute);
app.use('/book', bookRoute);
app.use('/', siteRoute);

app.post('/search', (req, res) => {
console.log(req.body.q); // lay du lieu tren form data
res.send('');
});
}

module.exports = route;
