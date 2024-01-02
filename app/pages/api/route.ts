import connectToDataBase from "@/app/lib/index";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  res.json({ message: "Hello from Next.js!" });
}
