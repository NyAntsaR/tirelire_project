var express = require('express');
var router = express.Router();
var icommentsCtrl = require('../controllers/icomments');

router.post('/incomes/:id/icomments', icommentsCtrl.create);

module.exports = router;