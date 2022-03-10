const express = require('express')
const { GoogleAuth } = require('google-auth-library')
const { login, signup, logout, googleLogIn } = require('./auth.controller')

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.post('/logout', logout)
// router.post('/google-login', googleLogIn)


module.exports = router