const express = require("express");
require("dotenv").config();

const app = express();

// Connect to database
const connectDB = require("./config/db");
connectDB();

// These middlewares are for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

// Error handling

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
