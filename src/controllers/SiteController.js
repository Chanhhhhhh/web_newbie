var User = require('../models/usermodel');
const express = require('express');
class SiteController {
// [get] /home
home(req, res) {
res.render('home');
}

check(req, res) {
var a = User.check(req.body.MaDG, req.body.SDT);
User.check(req.body.MaDG, req.body.SDT)
.then((result) => {
if (result > 0) {
res.redirect('/onepiece');
} else {
res.send('err, back to login again!!!!');
}
// Tiếp tục thực hiện các hành động khác dựa trên kết quả
})
.catch((err) => {
console.log('Lỗi:', err);
// Xử lý lỗi nếu có
});

// console.log(req.body.MaDG)
// console.log(a);
// if(a==1){
//   res.redirect('/onepiece');a
// }
// else{
//   res.send("loi");
// }
}
}

module.exports = new SiteController();
