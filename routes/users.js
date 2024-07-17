var express = require('express');
const { homepage,signuppage,signinpage,logout } = require('../controllers/userControllers');
var router = express.Router();

/* GET users listing. */
router.get('/', homepage);

router.post('/register', signuppage);

router.post('/login', signinpage);

router.get('/logout', logout);

module.exports = router;
