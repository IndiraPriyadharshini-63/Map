const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const pinRoutes = require("./routes/pins");
const userRoutes = require("./routes/users");

app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

app.use("/api/pins", pinRoutes);
app.use("/api/users", userRoutes);

app.listen(5000, () => {
  console.log("server is running");
});
