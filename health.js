// external/gitlab-mcp/health.js
const express = require("express");
const app = express();

app.get("/health", (req, res) => res.send("OK"));
app.get("/live", (req, res) => res.send("ALIVE"));
app.get("/ready", (req, res) => res.send("READY"));

const port = process.env.BIND_PORT || 8080;
const host = process.env.BIND_ADDRESS || "0.0.0.0";

app.listen(port, host, () => {
  console.log(`Health server running on ${host}:${port}`);
});
