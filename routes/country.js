const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    "Canada",
    "India",
    "Australia",
    "United States",
    "United Kingdom",
    "Brazil",
    "Japan"
  ]);
});

module.exports = router;
