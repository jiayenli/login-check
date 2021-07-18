const express = require('express')
const router = express.Router()
const User = require('../../models/user')
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/homepage', (req, res) => {
  const email = User.map(user => user.email)
  const userEmail = req.body.email
  const userPassword = req.body.password
  const userId = email.indexOf(userEmail)
  if (userId < 0) {
    res.render('index', { error: '帳號或密碼錯誤' })
  } else if (userId >= 0 && User[userId].password === userPassword) {
    res.render('homepage', { firstName: User[userId].firstName })
  } else {
    res.render('index', { error: '密碼錯誤' })
  }

})

module.exports = router
