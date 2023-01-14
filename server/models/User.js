const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  firstname: { type: String },
  lastname:{ type: String },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String }
});
const User = model('User', userSchema);

module.exports = User;