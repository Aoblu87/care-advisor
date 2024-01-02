import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import connectToDatabase from "../../../../lib/index.js";
import { User } from "../../../../models/users.js";

import { NextApiRequest, NextApiResponse } from "next";

// export async function POST(req, res, next) {
//   connectToDatabase();

//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).send({ message: "User not found" });
//     }
//     const isPasswordCorrect = bcrypt.compare(password, user.password);
//     if (!isPasswordCorrect) {
//       return res.status(401).json({ message: "Invalid password" });
//     }
//     const payload = { id: user._id };

//     const token = jwt.sign(payload, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.status(200).json({ token, payload, message: "Logged in" });
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function POST(req, res) {
  await connectToDatabase();

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

    const token = jwt.sign(payload, process.env.NODE_ENV, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ token, payload, message: "Logged in", success: true });
    // const user = await User.create(
    //   req.body
    // ); /* create a new model in the database */
    // res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
