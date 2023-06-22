const db = require('../connect/config');

const Book = function (book) {
this.Masach = book.Masach;
this.Tensach = book.Tensach;
this.MaTG = book.MaTG;
this.NXB = book.NXB;
this.Matheloai = book.Matheloai;
this.NamXB = book.NamXB;
this.Soluong = book.Soluong;
};
Book.get_all = function (result) {
db.query('SELECT * FROM sach', function (err, book) {
if (err) {
result(null);
} else {
result(book);
}
});
};

Book.getbyID = function (id, result) {
db.query(`SELECT * FROM sach WHERE Soluong = "${id}"`, function (err, book) {
console.log(err, book);
if (err) {
result(null);
} else {
result(book);
}
});
};

module.exports = Book;
