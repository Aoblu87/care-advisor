import mongoose from "mongoose";
export default function connectToDataBase() {
  mongoose
    .connect(
      "mongodb+srv://stefaniastruzzi:32K2xdD9cLofhbjV@cluster0.yftyrlv.mongodb.net/care-advisor"
    )
    .then(() => {
      server.listen(port, () => {
        console.log("Server listening to port: " + port);
        // console.table(list(server))
      });
    })
    .catch(() => {
      console.log("Errore nella connessione al DB");
    });
}
// track the connection
// let isConnected = false;
// export const connectToDataBase = async () => {
//   mongoose.set("strictQuery", true);
//   if (isConnected) {
//     console.log("DB connected already");
//     return;
//   }
//   try {
//     await mongoose.connect(
//       "mongodb+srv://stefaniastruzzi:32K2xdD9cLofhbjV@cluster0.yftyrlv.mongodb.net/care-advisor",
//       {
//         dbName: "MY_DB",
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );
//     isConnected = true;
//     console.log("Server connected");
//   } catch (error) {
//     console.log(error);
//   }
// };
