require("dotenv").config();

const express = require("express");
const path = require("path");

const connectDB = require("./config/database");
const healthRoute = require("./routes/health");
const metricsRoute = require("./routes/metrics");
const environmentRoute = require("./routes/environment");
const countryRoute = require("./routes/country");

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/health", healthRoute);
app.use("/metrics", metricsRoute);
app.use("/api/environment", environmentRoute);
app.use("/api/country", countryRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Earth Impact Live running on port ${PORT}`);
});
