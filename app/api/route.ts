import connectionDB from "@/lib/connectionDB.js";
import { NextResponse } from "next/server";

connectionDB();
export function GET() {
  return NextResponse.json({ message: "Hello from Next.js!" });
}
