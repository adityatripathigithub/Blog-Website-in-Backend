var express = require('express');
const { indexhomepage, indexlogin, indexregister,indexprofile } = require('../controllers/indexControllers');
var router = express.Router();

/* GET home page. */
router.get('/', indexhomepage);


router.get('/login',indexlogin);


router.get('/profile',indexprofile);


router.get('/register',indexregister);



module.exports = router;
