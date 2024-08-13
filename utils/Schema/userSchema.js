import mongoose from "mongoose";


const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  phone: {type: Number, required: true},
  message: {type: String, required: true}
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;