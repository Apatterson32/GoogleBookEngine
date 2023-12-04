const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://pattersonal10:Somerhalder32@googlebooksearchproject.kqxaezx.mongodb.net/');

module.exports = mongoose.connection;
