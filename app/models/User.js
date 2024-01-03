import mongoose from "mongoose";
// export interface User extends mongoose.Document {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   googleId: string;
//   dayOfBirth: string;
//   avatar: string;
//   createdAt: string;
// }

// const UserSchema = new mongoose.Schema<User>({
//   firstName: {
//     type: String,
//     required: [true, "Please provide your Firstname."],
//   },
//   lastName: {
//     type: String,
//     required: [true, "Please provide your Lastname."],
//   },
//   email: {
//     type: String,
//     required: [true, "Please provide your email."],
//   },
//   password: {
//     type: String,
//     required: function () {
//       return this.googleId ? false : true;
//     },
//   },
//   googleId: {
//     type: String,
//     required: function () {
//       return this.password ? false : true;
//     },
//   },
//   dayOfBirth: {
//     type: String,
//   },
//   avatar: {
//     type: String,
//   },
//   createdAt: {
//     type: String,
//   },
// });
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: function () {
      return this.googleId ? false : true;
    },
  },
  googleId: {
    type: String,
    required: function () {
      return this.password ? false : true;
    },
  },
  dayOfBirth: {
    type: String,
  },
  avatar: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
