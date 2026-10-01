import mongoose from "mongoose";
import config from "./index.js";

const connectToDb = async ()=>{
  await mongoose.connect(config.MONGO_URI)
  console.log("Connected to MongoDB")
}

export default connectToDb
