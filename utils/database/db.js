import mongoose from "mongoose";

export async function connectDB(){
  try {
    mongoose.connect(process.env.MONGODB_URL);
    const connection = mongoose.connection
    return connection;
  } catch (error) {
    console.log("Error in connecting Database")
  }
}