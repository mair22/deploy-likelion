const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

// import routes
const userRoutes = require("./routes/user");

// app
const app = express();

// DB
mongoose
  .connect(process.env.MONGO_DB, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB error: ", err));

// routes middlewares
app.use("/api", userRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
