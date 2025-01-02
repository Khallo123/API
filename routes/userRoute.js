const { Router } = require('express')
const { getAllUsers, getSingleUser } = require('../controllers/userControllers')
const router = Router()

router.get('/list', getAllUsers)
router.get('/detail/:userId', getSingleUser)
module.exports = router