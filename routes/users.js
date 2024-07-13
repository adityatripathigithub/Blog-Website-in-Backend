var express = require('express');
const { homepage,signuppage } = require('../controllers/userControllers');
var router = express.Router();

/* GET users listing. */
router.get('/', homepage);

router.post('/register', signuppage);

module.exports = router;
