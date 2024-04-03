const express = require('express');
const { getHomepage, getABC, getHoidanIT } = require('../controllers/HomeController');
const router = express.Router();



//khai báo route
router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/hoidanit', getHoidanIT);

module.exports = router;