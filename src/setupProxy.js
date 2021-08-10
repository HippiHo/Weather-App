const express = require("express");
const proxy = require("http-proxy-middleware");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(
  "/api",
  proxy({
    target: "https://samples.openweathermap.org",
    changeOrigin: true,
  })
);

app.listen(8080, () => {
  console.log("CORS-enabled web server listening on port 8080");
});
