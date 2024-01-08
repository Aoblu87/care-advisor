import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
const cloudinaryStorage = new CloudinaryStorage({
  cloudinary,
  params: "healt-guide",
});
const uploadFile = multer({ storage: cloudinaryStorage });
export default uploadFile
export const config = {
    matcher: 'api/users/:path*',
  }