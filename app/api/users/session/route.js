import connectToDatabase from "../../../db/database.js";
import { User } from "../../../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export default async function POST(req, res, next) {
  connectToDatabase();

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const isPasswordCorrect = bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const payload = { id: user._id };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token, payload, message: "Logged in" });
  } catch (error) {
    console.log(error);
  }
}
