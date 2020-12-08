const express = require('express');
const router = express.Router();
const controller = require("../controllers/pakage")
const cors = require('cors')


router.use(cors({
  origin: 'https://aca-final-project-front-end.herokuapp.com'
}))


router.get("/package",controller.getPackage)

router.post("/createPackage/:packageName/:packageInfo",controller.createPackage)


module.exports = router