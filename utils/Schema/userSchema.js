import mongoose from "mongoose";


const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  phone: {type: Number, required: true},
  message: {type: String, required: true},
  orderDate: {type: Date, required: true}
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);
export default userModel;