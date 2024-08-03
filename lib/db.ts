import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Databse connected successfully");
    });
    mongoose.connection.on("error", () => {
      console.log("err in database");
    });
    await mongoose.connect(process.env.MONGODB_URI as string);
  } catch (err) {
    console.log("Failed to connect to database ", err);
  }
};

export default connectDB;
