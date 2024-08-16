import mongoose from "mongoose";

 const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    const connection = mongoose.connection
    return connection;
  } catch (error) {
    console.log("Error in connecting Database")
  }
}

export default connectDB;