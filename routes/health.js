const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "Healthy",
    app: "Earth Impact Live",
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
