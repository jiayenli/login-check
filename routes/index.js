const express = require('express')
const router = express.Router()
const login = require('./modules/login')
router.use('/', login)

// 匯出路由器
module.exports = router