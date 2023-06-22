const db = require('../connect/config');

const User = function (user) {
this.MaDG = user.MaDG;
this.TenDG = user.TenDG;
this.Gioitinh = user.Gioitinh;
this.Ngaysinh = user.Gioitinh;
this.diachi = user.diachi;
this.SDT = user.SDT;
};

User.check = function (MaDG, SDT) {
return new Promise((resolve, reject) => {
if (MaDG && SDT) {
// 		// Execute SQL query that'll select the account from the database based on the specified MaDG and SDT
db.query(
`SELECT * FROM docgia WHERE MaDG = "${MaDG}" AND SDT = "${SDT}"`,
function (err, docgia) {
// If there is an issue with the query, output the error
console.log(docgia);
numRows = docgia.length;
if (numRows > 0) {
resolve(1);
} else {
resolve(0);
}
},
);
} else {
res.send('Please enter MaDG and SDT!');
res.end();
}
});
};

module.exports = User;
