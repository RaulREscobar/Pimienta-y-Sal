var express = require('express');
var router = express.Router();
let {detalle} = require('../controllers/menuController')

/* GET home page. */
router.get('/:id', detalle);

module.exports = router;