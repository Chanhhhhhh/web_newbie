const onepieceRoute = require('./onepiece');
const siteRoute = require('./site');

function route(app) {
    app.use('/onepiece', onepieceRoute);
    app.use('/', siteRoute);

    app.get('/oldpiece', (req, res) => {
        res.render('old');
    });

    app.post('/search', (req, res) => {
        console.log(req.body.q); // lay du lieu tren form date
        res.send('');
    });
}

module.exports = route;
