// const users = require('../models/users');

const getAllUsers = async (req, res) => {
    await users.find()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(404).json({ massage: err }));
  };
  