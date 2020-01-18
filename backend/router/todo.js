const express = require('express')
const router = express.Router()
const todoControllers = require('../controllers/todo')

router.post('/create', todoControllers.create)
module.exports = router