const Image = require('../model/imageSchema');

exports.postImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file received' });
    }

    const { originalname, path } = req.file;
    const image = new Image({ filename: originalname, filepath: path });
    await image.save();

    res.status(200).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Failed to upload image' });
  }
};

exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find({}, 'filename filepath');
    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Failed to fetch images' });
  }
};


