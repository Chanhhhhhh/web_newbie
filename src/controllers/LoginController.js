class loginController {
// [get] /login
loginUser(req, res) {
res.render('login');
}
}

module.exports = new loginController();
