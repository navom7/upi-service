const upiController = require('../controllers/upiController.js')

const router = require('express').Router();

router.post('/createNewUPI', upiController.createNewUPI);
router.post('/getUPIByUserId', upiController.getUPIByUserId);


module.exports = router


