const client = require("prom-client");

client.collectDefaultMetrics({
  prefix: "earth_impact_live_"
});

const httpRequestCounter = new client.Counter({
  name: "earth_impact_live_http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route"]
});

module.exports = client;
module.exports.httpRequestCounter = httpRequestCounter;