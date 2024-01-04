import connectionDB from "@/app/lib/connectionDB";
import passport from "passport";

export async function GET() {
  await connectionDB();
  passport.authenticate("google", {
    scope: ["profile", "email"], // ovvero i dati che vogliamo ricevere da Google
    prompt: "select_account", // questo per richiede all'utente di scegliere il proprio account,,
    // altrimenti Google sceglie l'ultimo automaticamente,
    // il che non sempre è desiderabile, ad esempio volendosi autenticare con un account diverso,
    // volendo creare un nuovo account, o volendo sloggarsi
  });
}
