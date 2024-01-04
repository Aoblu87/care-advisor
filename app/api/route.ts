import connectionDB from "@/app/lib/connectionDB.js";
import { NextResponse } from "next/server";

connectionDB();
export function GET() {
  return NextResponse.json({ message: "Hello from Next.js!" });
}
