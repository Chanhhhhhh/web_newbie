var Book = require('../models/bookmodel');

class BookController {
showData(req, res) {
Book.get_all(function (data) {
res.send({ book: data });
});
}

findData(req, res) {
var data = Book.getbyID(req.params.id);
res.send({ book: data });
}
}

module.exports = new BookController();
