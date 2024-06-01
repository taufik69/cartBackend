require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const DatabaseConnection = require("./Connection/DatatBaseConnection.js");

DatabaseConnection();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
console.log(process.env.DATABASE_CONNECTION_URL);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Running on Port ${process.env.PORT}`);
});
