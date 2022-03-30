require("dotenv").config();
require("express-async-errors");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const helmet = require("helmet");
const { json, urlencoded } = require("body-parser");

// const config = require(__dirname + '/config/database')[process.env.NODE_ENV];

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(helmet());
} else {
  app.use(cors());
}

app.use(currentUser);
app.set("etag", false);

/*
 * require routes
 */
require("./src/routes")(app, sequelize);

/*
 * generate models doc, routes doc.
 * required parameters:
 * routes folder path
 */
const routes = ["./src/routes/**/*Routes.js"];
const specs = swagger(app, sequelize, { apis: [...routes] });
app.use("/docs", swaggerUi.serve);
app.get(
  "/docs",
  swaggerUi.setup(specs, {
    explorer: false,
  })
);

app.get("/", (req, res) => {
  res.send(`API server is up and running... <a href="/docs/">Click here</a> to access the API documentations.`);
});

app.all("*", async () => {
  throw new BadRequestError("Invalid url");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server listening on ${PORT}...`);
});
