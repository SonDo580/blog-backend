const express = require("express");
require("dotenv").config();

// Connect to database

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

// Error handling

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
