const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  text: { type: String, required: true },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Post",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Comment", commentSchema);
