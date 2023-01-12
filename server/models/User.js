const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String }
});
const User = model('User', userSchema);

module.exports = User;