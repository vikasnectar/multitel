var express = require('express')
var router = express.Router()
var user = require('../controller/user_ctr')
const middileware = require('../middileware')
router.post('/userRegistration', user.userRegistration);

router.post('/userLogin', user.userLogin);
router.post('/getUserByToken', user.getUserByToken);
router.get('/emailVerification/:token', user.emailVerification);
router.post('/checkOtpisVailid', user.checkOtpisVailid);

router.post('/forgotPassword', user.forgotPassword);
router.post('/resetPassword', user.resetPassword);
router.post('/changePassword',middileware.checkAuthentication, user.changePassword);
router.put('/updateProfile',middileware.checkAuthentication,user.updateProfile);

module.exports = router;