
const express = require('express');
const router = express.Router()
const { getHomepage, getNewUser, postCreateUser } = require('../controllers/homeControlers')


// khai bao route
router.get('/', getHomepage)

router.get('/new-user', getNewUser)

router.post('/create-user', postCreateUser)

module.exports = router;