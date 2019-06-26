const express = require("express");
const router = express.Router();
const getTimelinesWithUser = require("../controller/Timeline/getTimelinesWithUser");

router.get("/timelines", getTimelinesWithUser);

module.exports = router;
