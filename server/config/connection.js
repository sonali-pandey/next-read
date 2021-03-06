const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/next-read', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
    // useFindAndModify: false, // resolved the unhandled promise issue and the useFindAndModify not supported warning
  // useCreateIndex: true,
  // useFindAndModify: false,
});

module.exports = mongoose.connection;
