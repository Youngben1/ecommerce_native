import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});


const fileFilter =(req, file, cb) =>{
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeTypes = allowedTypes.test(file.mimetype);

    if(extname && mimeTypes){
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only JPEG, PNG, and WEBP are allowed."));
    }
}
export const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});
