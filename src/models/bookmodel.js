const Book = function (book) {
this.id = book.id;
this.name = book.name;
};
Book.get_all = function (result) {
var data = [
{ id: 1, name: 'fuck' },
{ id: 2, name: 'hello' },
];
result(data);
};

Book.getbyID = function (id) {
var data = { id: id, name: 'lao hac' };
return data;
};

module.exports = Book;
