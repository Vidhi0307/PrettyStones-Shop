const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/prettystones', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
/*   useCreateIndex: true,
  useFindAndModify: true, */
});

module.exports = mongoose.connection;