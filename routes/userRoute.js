const { Router } = require('express')
const { getAllUsers, getSingleUser, createNewUser } = require('../controllers/userControllers')
const router = Router()

router.get('/list', getAllUsers)
router.get('/detail/:userId', getSingleUser)
router.post('/create', createNewUser)

module.exports = router