const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    photo: String,
    googleId: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: "String",
      enum: ["admin", "user"],
      default: "user",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
