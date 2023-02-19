const express = require('express');
const routes = express.Router();
const {
  create_one,
  get_gallery,
  get_one,
  update_one,
  delete_one,
} = require('../controllers/gallery.controller');
const upload = require('../utils/multer');

routes.post('/', upload.single('image'), create_one);
routes.get('/', get_gallery);
routes.get('/:id', get_one);
routes.put('/:id', update_one);
routes.delete('/:id', delete_one);

module.exports = routes;
