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
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "MY_DB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Server connected");
  } catch (error) {
    console.log(error);
  }
};
export default connectionDB;
// import mongoose from "mongoose";

// const DATABASE_URL = process.env.DATABASE_URL;

// if (!DATABASE_URL) {
//   throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(DATABASE_URL, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connectDB;
