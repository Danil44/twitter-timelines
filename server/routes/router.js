const express = require("express");
const router = express.Router();
const getTimelinesWithUser = require("../controller/Timelines/getTimelinesWithUser");

router.get("/timelines", getTimelinesWithUser);

module.exports = router;
