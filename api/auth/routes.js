const express = require('express')
const router = express.Router()
const model = require('./login')

router.get('/logout', model.logout)
router.get('/loginForm', model.loginForm)
router.post('/login', model.login)



module.exports = router;