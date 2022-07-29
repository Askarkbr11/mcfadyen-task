const express = require("express")
const router = express.Router()
const {getAllTravelData} = require("../controller/travel")

router.route("/").get(getAllTravelData)

module.exports = router;