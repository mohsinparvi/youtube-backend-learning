import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});

connectDB();

/*
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Our application not able to talk to MongoDB", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Our application is running at port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
})();*/
