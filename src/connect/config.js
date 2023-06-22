const MySql = require('mysql2');

const connection = MySql.createConnection({
host: 'localhost',
user: 'root',
password: '28022003',
database: 'quanlytv',
});

connection.connect(function (err) {
if (err) console.log('that bai');
else console.log('successfully!!!');
});

module.exports = connection;
