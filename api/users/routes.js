const express = require('express')
const router = express.Router()
const model = require('./users')
const auth = require('../../auth-middleware')
const checkSession = auth.checkSession

router.get('/', checkSession, model.getUsers)
router.get('/newUserForm', checkSession, model.newUserForm)
router.post('/add', checkSession, model.addUser)
router.get('/delete/:id', checkSession, model.deleteUser)
router.get('/details/:id', checkSession, model.getUserById)
router.get('/updateform/:id', checkSession, model.updateForm)
router.post('/update', checkSession, model.updateUser)



module.exports = router;