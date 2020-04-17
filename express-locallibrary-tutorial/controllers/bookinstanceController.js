var Book = require("../models/book")
var Author = require("../models/author")
var Genre = require("../models/genre")
var BookInstance = require('../models/bookinstance');

var async = require("async")

// Display list of all BookInstances.
exports.bookinstance_list = function(req, res) {
        async.parallel({
            book_status: function(callback){
                BookInstance.find({}, "status book")
                .populate("book")
                .exec(callback)
            },
            book_list: function(callback){
                Book.find({}, "author title")
                .populate("author")
                .exec(callback);
            }
        }, function(err, results) {
            res.render("book_instance", {title: "Book availability", err: err, data: results});
        });
    };

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};