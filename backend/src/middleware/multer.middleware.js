import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, `S{Date.now()}-${file.originalname}`);
    }
});


const fileFilter =(req, file, cb) =>{
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeTypes = allowedTypes.test(file.mimetype);
}