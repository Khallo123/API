const { Router } = require('express')
const { getAllUsers, getSingleUser, createNewUser, deleteUser, updateUser } = require('../controllers/userControllers')
const router = Router()

router.get('/list', getAllUsers)
router.get('/detail/:userId', getSingleUser)
router.post('/create', createNewUser)
router.delete('/delete/:userId', deleteUser)
router.put('/update/:userId', updateUser)

module.exports = router