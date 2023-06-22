var Book = require('../models/bookmodel');

class BookController {
showData(req, res) {
Book.get_all(function (data) {
res.send({ book: data });
});
}

findData(req, res) {
Book.getbyID(req.params.id, function (result) {
res.send({ book: result });
});
}
}

module.exports = new BookController();
