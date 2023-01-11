// DEPENDENCIES
const cors = require("cors");
const express = require("express");

//session middleware
const session = require("express-session");

// controllers
const userController = require("./controllers/userController");
const clockController = require("./controllers/clockController");
const authController = require("./controllers/authController");
const emailSubscriptionController = require("./controllers/emailSubscriptionController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/users", userController);

app.use("/clocks", clockController);

app.use("/auth", authController);

app.use("/emailSubscription", emailSubscriptionController);

app.get("*", (req, res)=> {
  res.status(404).json("Page not found!")
})


// EXPORT
module.exports = app;
