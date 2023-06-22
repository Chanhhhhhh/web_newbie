const express = require('express');
const router = express.Router();
const siteController = require('../controllers/SiteController');
router.post('/auth', siteController.check);
router.use('/', siteController.home);

module.exports = router;
