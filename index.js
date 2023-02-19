const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
require('./db');

app.use('/api', require('./routes/gallery.routes'));

app.listen(process.env.PORT, () =>
  console.log(`server http://localhost:${process.env.PORT}/api`)
);
