import { connectToDataBase } from "../db/database.js";

export const GET = async (request: Request) => {
  try {
    await connectToDataBase();
    console.log("collegato");
    //return logic here
  } catch (error) {
    //return logic here
  }
};
