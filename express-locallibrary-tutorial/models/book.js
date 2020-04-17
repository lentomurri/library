var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    //associate author through automatic ID assigned by default
    author: {type: Schema.Types.ObjectId, ref: "Author", required: true},
    //associate genre through ID of genre
    genre: [{type: Schema.Types.ObjectId, ref: "Genre"}]
});

//==VIRTUALS==//

BookSchema
.virtual("url")
.get(function(){
    return "/catalog/book" + this._id;
});

module.exports = mongoose.model("Book", BookSchema);