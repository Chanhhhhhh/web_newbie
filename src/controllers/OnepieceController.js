class OnepieceController {
// [get] /onepiece
index(req, res) {
res.render('onepiece');
}
// [get] /onepiece/:slug
show(req, res) {
res.send('Sama');
}
}

module.exports = new OnepieceController();
