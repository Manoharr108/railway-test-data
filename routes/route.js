const express = require('express')
const router = express.Router()

const {getallproducts, getallproductstest} = require('../controllers/control')

router.route("/").get(getallproducts)
router.route("/test").get(getallproductstest)

module.exports = router