var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var schema = new Schema({
 user: {type: Schema.Types.ObjectId, ref: 'User'},
//  favorite: {items: [{element: Object}]}
 favorite: {items: Array}
});

module.exports = mongoose.model("Library", schema);