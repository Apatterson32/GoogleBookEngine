const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pattersonal10:Somerhalder32@googlebooksearchproject.kqxaezx.mongodb.net/');

module.exports = mongoose.connection;
