const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmetMiddleware = require("./middlewares/helmet.middleware.js");
const corsMiddleware = require("./middlewares/cors.middleware.js");
const routes = require("./routes/index.js");
const app = express();

app.use(corsMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmetMiddleware);

app.use("/api", routes);

module.exports = app