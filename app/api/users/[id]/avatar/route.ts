// import uploadFile from "@/app/middlewares/uploadFile";
// import multer from "multer";
// import { NextRequest, NextResponse } from "next/server";

// export default function PATCH(req: NextRequest, res: NextResponse, { params }: { params: { id: string }}) {
//     try {
//         uploadFile.single("avatar")(req, res, async function (error) {
//           if (error instanceof multer.MulterError) {
//             return NextResponse.json({error:"Cloudinary Error",
//         status:400})
//           } else if (error) {
//             return NextResponse.json({ error: error.message }, { status: 500 });
//         }
    
//           if (!req.file) {
//             return NextResponse.json({message:"Upload failed"},{status:400})

//           }
    
//           // Ora puoi eseguire l'aggiornamento dell'avatar in base al req.file.path
//           // Ad esempio, utilizzando Mongoose o un altro ORM
    
//           // Restituisci una risposta JSON di successo
//           return NextResponse.json({message:"Avatar succesfully updated"})
//         });
//       } catch (error:any) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }

