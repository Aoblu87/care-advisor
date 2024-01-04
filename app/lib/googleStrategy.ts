import User from "@/app/models/User";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: `/api/auth/google/callback`,
    },
    async function (_, __, profile, cb) {
      console.log(profile);

      // qui dentro abbiamo i dati dell'utenza di Google,
      // ma noi vogliamo creare un utente nel nostro database.
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = await User.create({
            googleId: profile.id,
            firstName: profile.name!.givenName,
            lastName: profile.name!.familyName,
            email: profile.emails![0].value,
          });
        }

        // dopo aver creato l'utente, lo passiamo a passport che lo inserisce
        // in req.user

        cb(null, user);
      } catch (error: any) {
        cb(error);
      }

      // se volessimo per qualsiasi motivo bloccare l'accesso a questo utente,
      // o sollevare un errore, possiamo farlo passando un errore come primo
      // parametro di cb

      // cb(new Error("User not allowed"))
    }
  )
);

export default passport;
