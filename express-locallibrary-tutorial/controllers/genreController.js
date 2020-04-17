var Genre = require('../models/genre');
var Author = require('../models/author');
var Book = require('../models/book');

var async = require("async");

// Display list of all Genre.
exports.genre_list = function(req, res) {
    Genre.find({})
    .exec(function(err, results) {
        if (err) {
            return err;
        }
        res.render("genre", {title: "Genre List", genre: results});
    });
};

// Display detail page for a specific Genre.
exports.genre_detail = function(req, res) {
    async.parallel({
        genre_data: function(callback) {
            Genre.findById(req.params.id, "name")
            .exec(callback);
        },
        book_list: function(callback) {
        Book.find({genre: req.params.id}, "title author")
        .populate("author")
        .sort({title: "ascending"})
        .exec(callback);
        }}, function(err, results) {
        res.render("genre_detail", {error: err, data: results});
   });
};


// Display Genre create form on GET.
exports.genre_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create GET');
};

// Handle Genre create on POST.
exports.genre_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create POST');
};

// Display Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};