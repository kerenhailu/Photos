const photos = require("../Models/photos-models");
const getAllPhotos = async (req, res) => {
  await photos
    .find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};
const getPhotoById = async (req, res) => {
  await photos
    .findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const postPhotos = async (req, res) => {
  await photos
    .create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const putPhotos = async (req, res) => {
  photos
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ massage: "update is failed" });
    });
};

const deletePhotos = async (req, res) => {
  photos.findByIdAndDelete(req.params.id, (err, result) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    res
      .status(201)
      .json({ success: true, data: result, message: "the News delete" });
  });
};

module.exports = {
  getAllPhotos,
  getPhotoById,
  postPhotos,
  putPhotos,
  deletePhotos,
};
