const express = require("express");
const router = express.Router();
const { getMain } = require("../controller/mainController");

router.get("/", getMain);

module.exports = router;
