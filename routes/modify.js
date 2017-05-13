var express   = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var router    = express.Router();
var controllerUser = require('../controllers/user');
var user = new controllerUser();

router.put('/', upload.single('file'),user.edit)




module.exports = router;