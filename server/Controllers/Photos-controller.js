const photos = "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${CATEGORY}";
const getAllPhotos = async (req, res) => {
    await photos.find()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(404).json({ massage: err }));
  };
  module.exports = {
    getAllPhotos
  };