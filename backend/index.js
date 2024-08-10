const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
const pinRoutes = require("./routes/pins");
const userRoutes = require("./routes/users");
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
