//connect to mongoose to handle database
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//constructors always start with capital letter and have JSON structure, defining which data to bind to which field

var AuthorSchema = new Schema({
    first_name: {type: String, required: true},
    family_name: {type: String, required: true},
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
});

AuthorSchema
.virtual("fullName")
.get(function(){
    var fullname = "";
    //in case one of the fields is empty, returns the fullname as an empty string. Else, returns the function.
    if (this.first_name && this.family_name) {
        fullname = `${this.family_name}, ${this.first_name}`;
    }
    return fullname;
});

AuthorSchema
.virtual("lifeSpan")
.get(function(){
    var lifespan ="";
    if (dateOfBirth && dateOfDeath) {
        lifespan = (this.dateOfDeath.getYear() - this.dateOfBirth.getYear()).toString();
        return `Died: ${lifespan} years old`;
    }
    return lifespan;
});

AuthorSchema
.virtual("url")
.get(function(){
    return "/catalog/author" + this._id;
});

//export module for other apps to use it
module.exports = mongoose.model("Author", AuthorSchema);

