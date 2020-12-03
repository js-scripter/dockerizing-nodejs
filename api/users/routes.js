const express = require('express')
const router = express.Router()
const model = require('./users')

router.get('/', model.getUsers)
router.get('/newUserForm', model.newUserForm)
router.post('/add', model.addUser)
router.get('/delete/:id',model.deleteUser)
router.get('/details/:id',model.getUserById)
router.get('/updateUserForm/:id', model.updateUserForm)
router.post('/update', model.updateUser)



module.exports = router;