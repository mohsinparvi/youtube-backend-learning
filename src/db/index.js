import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  console.log("MONGODB_UR", process.env.MONGODB_URI);
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/BACKENDLEARNING`
    );
    console.log(`\n connectionInstance: ${connectionInstance} \n`);

    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host} \n`
    );
  } catch (error) {
    console.log("MongoDB connection FAILED: " + error);
    process.exit(1);
  }
};

export default connectDB;
