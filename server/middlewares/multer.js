import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads') // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  },
})

const upload = multer({ storage: storage })

export default upload;



// // Configure storage options
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // Save images to 'public/uploads/images' and PDFs to 'public/uploads/pdfs'
//     if (file.mimetype.startsWith('image')) {
//       cb(null, 'public/uploads/images');
//     } else if (file.mimetype === 'application/pdf') {
//       cb(null, 'public/uploads/pdfs');
//     } else {
//       cb(new Error('Invalid file type'), false);
//     }
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, `${uniqueSuffix}-${file.originalname}`);
//   }
// });

// // File filter to accept only images and PDFs
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith('image') || file.mimetype === 'application/pdf') {
//     cb(null, true);
//   } else {
//     cb(new Error('Only images and PDF files are allowed'), false);
//   }
// };

// const multerMiddleware = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
// });

// export default multerMiddleware;
