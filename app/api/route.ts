import connectionDB from "@/app/lib/connectionDB.js";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};
connectionDB();
export async function GET(
  req: NextApiRequest,
  response: NextApiResponse<ResponseData>
) {
  response.json({ message: "Hello from Next.js!" });
}
