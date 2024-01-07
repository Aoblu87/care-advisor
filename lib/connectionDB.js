

import mongoose from "mongoose";

// track the connection
let isConnected = false;
const connectionDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB connected already");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "MY_DB",
    });
    isConnected = true;
    console.log("Server connected");
  } catch (error) {
    console.log(error);
  }
};
export default connectionDB;

