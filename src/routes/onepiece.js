const express = require("express");
const router = express.Router();

const onepieceController = require("../controllers/OnepieceController");

router.use("/luffy", onepieceController.show);
router.use("/", onepieceController.index);

module.exports = router;
