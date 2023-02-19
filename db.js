const mongoose = require('mongoose');

module.exports = mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => console.log('connected to db'))
  .catch((err) => console.error(err));
