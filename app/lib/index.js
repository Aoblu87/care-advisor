import mongoose from "mongoose";

// track the connection
let isConnected = false;
const connectToDataBase = async () => {
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
export default connectToDataBase;
// import mongoose from 'mongoose'
// declare global {
//   var mongoose: any // This must be a `var` and not a `let / const`
// }

// const MONGODB_URI = process.env.MONGODB_URI!

// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   )
// }

// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn
//   }
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     }
//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose
//     })
//   }
//   try {
//     cached.conn = await cached.promise
//   } catch (e) {
//     cached.promise = null
//     throw e
//   }

//   return cached.conn
// }

// export default dbConnect
// export default function connectToDataBase() {
// mongoose
// .connect(
//   "mongodb+srv://stefaniastruzzi:32K2xdD9cLofhbjV@cluster0.yftyrlv.mongodb.net/care-advisor"
// )
// .then(() => {
//   server.listen(port, () => {
//     console.log("Server listening to port: " + port);
//     console.table(list(server))
//   });
// })
// .catch(() => {
//   console.log("Errore nella connessione al DB");
// });
// }
