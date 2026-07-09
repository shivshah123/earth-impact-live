const fs = require("fs");

console.log("Running basic project tests...");

const requiredFiles = [
  "server.js",
  "package.json",
  "public/index.html",
  "public/style.css",
  "public/app.js",
  "routes/health.js",
  "routes/metrics.js"
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`Missing required file: ${file}`);
    process.exit(1);
  }
}

console.log("All basic tests passed.");
process.exit(0);
