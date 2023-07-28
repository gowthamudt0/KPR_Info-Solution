const imageController = require('../controller/imageController');
const router = require('express').Router();
const multer = require('multer');

// used multer to store files in images folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// =============Routes==============
router.post('/upload', upload.single('image'), imageController.postImage);

router.get('/images', imageController.getAllImages);

module.exports = router;
