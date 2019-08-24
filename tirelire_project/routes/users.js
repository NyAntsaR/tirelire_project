var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /students
router.get('/', usersCtrl.index);

module.exports = router;