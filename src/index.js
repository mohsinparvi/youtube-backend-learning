import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(
        `App is running at port http://localhost:${process.env.PORT}`
      );
 
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!!", err);
  });

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
