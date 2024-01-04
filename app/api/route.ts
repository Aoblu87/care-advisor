import connectionDB from "@/app/lib/connectionDB.js";
import type { NextApiResponse } from "next";
import { NextRequest } from "next/server";

type ResponseData = {
  message: string;
};
connectionDB();
export function GET(req: NextRequest, response: NextApiResponse<ResponseData>) {
  response.json({ message: "Hello from Next.js!" });
}
