import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongoAdapter";
import authConfig from "@/auth.config";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {strategy: "jwt", secret: process.env.JWT_SECRET},
  ...authConfig,
});
