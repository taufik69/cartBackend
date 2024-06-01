const mongoose = require("mongoose");
require("dotenv").config();
const dbConnection = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      process.env.DATABASE_CONNECTION_URL ||
        "mongodb+srv://taufikislam172:4UhfMG9GlmBy663b@cluster0.dyqpvhn.mongodb.net/"
    )
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Database connected failed", err);
    });
};

module.exports = dbConnection;
