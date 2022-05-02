const mongoose = require("mongoose");
const schama = mongoose.Schema;

const Photos = new schama(
  {
    Type: { type: String, required: true },
    Img: { type: String, required: true },
    Color: { type: String, required: true },
    Name: { type: String, required: true },
    Price: { type: Number, required: true },
    Long: { type: Boolean, required: true },
    Amount: { type: Number, required: true },
    Gender: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Photos", Photos);
