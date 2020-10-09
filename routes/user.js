const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')
const cors = require('cors')

router.use(cors({
  origin: 'http://localhost:3000'
}))

router.get('/email/:email',controller.getUser)

router.get('/users',controller.getUsers)

router.post('/createCustomer/:firstName/:lastName/:email/:password/:address/:town/:state/:date',controller.createUser)


module.exports = router