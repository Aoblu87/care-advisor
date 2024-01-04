import connectionDB from "@/app/lib/connectionDB";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import passport from "passport";

export function GET() {
  connectionDB;
  passport.authenticate("google", {
    failureRedirect: "/",
    session: false,
  }),
    async (req: NextRequest, res: NextResponse) => {
      try {
        const reqBody = await req.json();
        // Parses the request body to extract email
        const { user } = reqBody;
        const payload = { id: user._id };

        const token = jwt.sign(payload, process.env.JWT_SECRET!, {
          expiresIn: "1h",
        });

        // 4 - Dopo aver autenticato l'utente con Google, lo reindirizziamo
        // al frontend che deve gestire i dati nell'URL oltreché nel localStorage
        NextResponse.redirect(`/?token=${token}&userId=${user._id}`);
      } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    };
}
