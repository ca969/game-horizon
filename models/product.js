var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
  imagePath: { type: String},
  title: { type: String },
  price: { type: Number },
  genre: { type: String },
  platform: { type: Object },
  developer: { type: String },
  discount: {type: Number},
  oldPrice: {type: Number},
  genreTag: {type: String},
  platformTag: {type: String},
  releaseDate: {type: String}
});

module.exports = mongoose.model("Product", schema);
