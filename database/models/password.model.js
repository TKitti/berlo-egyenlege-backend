const mongoose = require("mongoose");

const passwordSchema = mongoose.Schema({
  name: { type: String },
  value: { type: String }
});

module.exports = mongoose.model("Password", passwordSchema);
