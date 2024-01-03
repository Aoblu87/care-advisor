import connectionDB from "@/app/lib/connectionDB.js";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

connectionDB();
export async function GET() {
  return NextResponse.json({ message: "Hello from Next.js!" });
}
