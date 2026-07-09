const express = require("express");
const router = express.Router();
const environmentController = require("../controllers/environmentController");

router.get("/:country", environmentController.getEnvironmentByCountry);

module.exports = router;
