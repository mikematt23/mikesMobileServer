const express = require('express');
const router = express.Router();
const controller = require("../controllers/package")
const cors = require('cors')


router.use(cors({
  origin:'http://localhost:3000'
}))


router.get("/package",controller.getPackage)


module.exports = router