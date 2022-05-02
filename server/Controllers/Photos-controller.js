const photos = require('../Models/photos-models');

const getAllPhotos = async (req, res) => {
    await photos.find()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(404).json({ massage: err }));
  };
  module.exports = {
    getAllPhotos
  };