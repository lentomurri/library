var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema({
    //reference to the current book
    book: {type: Schema.Types.ObjectId, ref: "Book", required: true},
    imprint: {type: String, required: true},
    //we use enum to allow only the choices listed in the array
    status: {type: String, required: true, enum: ["Available", "Maintenance", "Loaned", "Reserved"], default: "Maintenance"},
    dueBack: {type: Date, default: Date.now}
});

//==VIRTUALS==//

BookInstanceSchema
.virtual("url")
.get(function(){
    return "/catalog/bookinstance" + this._id;
});

module.exports = mongoose.model("BookInstance", BookInstanceSchema);