const router = require('express').Router()
const controlControllers = require('../controllers/ControlControllers')
const {checkPingTargetWebsite} = require('../middleware/checkPing')

router.post('/', checkPingTargetWebsite, controlControllers.attackCommand)
router.get('/', controlControllers.index)

module.exports = router