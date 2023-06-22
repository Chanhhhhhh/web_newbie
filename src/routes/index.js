const onepieceRoute = require('./onepiece');
const siteRoute = require('./site');
const bookRoute = require('./book');
const loginRoute = require('./login');

function route(app) {
app.use('/onepiece', onepieceRoute);
app.use('/book', bookRoute);
app.use('/login', loginRoute);
app.use('/auth', loginRoute);
app.use('/', siteRoute);
}

module.exports = route;
