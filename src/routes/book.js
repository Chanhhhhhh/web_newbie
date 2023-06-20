const express = require("express");
const router = express.Router();

const bookController = require("../controllers/BookController");

router.get("/show", bookController.showData);
// router.post('/find', (req,res)=>{
//         console.log(req.baseUrl);
//          res.send('ok');
// })
router.get("/find/:id", bookController.findData);

module.exports = router;
