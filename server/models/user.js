const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: { type: String, require: true },
  template: { type: Number, require: true },
  color: { type: String, require: true },
  name: { type: String, require: true },
  createdAt: { type: String, require: true },
  userData: { type: Object, require: true },
});

module.exports = mongoose.model("User", UserSchema);
