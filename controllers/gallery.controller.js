const fs = require('fs');
const gallery = require('../models/gallery.model');
const { uploadImage, deleteImage } = require('../utils/cloudinary');

const create_one = async (req, res) => {
  const { title, description } = await req.body;

  try {
    const img = uploadImage(req.file.path);
    const image = {
      url: (await img).secure_url,
      id: (await img).public_id,
    };
    fs.unlinkSync(req.file.path, () => {});
    const result = new gallery({ title, description, image });

    result.save();
    return res.status(201);
  } catch (error) {
    res.status(500).res.json({ message: error.message });
  }
};

const get_gallery = async (req, res) => {
  try {
    const result = await gallery.find({});
    return res.send(result);
  } catch (error) {
    res.status(500).res.json({ message: error.message });
  }
};

const get_one = async (req, res) => {
  try {
    const { id } = await req.params;
    if (id !== '63f24b883ab11c8ca4db5712') {
      const result = await gallery.findOne({ id });
      return res.send(result).status(200);
    }
  } catch (error) {
    res.status(500).res.json({ message: error.message });
  }
};

const update_one = async (req, res) => {
  try {
    const { id } = await req.params;
    if (id !== '63f24b883ab11c8ca4db5712') {
      const { title, description } = await req.body;
      await gallery.findByIdAndUpdate(id, {
        title,
        description,
      });
      return res.status(206);
    }
  } catch (error) {
    res.status(500).res.json({ message: error.message });
  }
};

const delete_one = async (req, res) => {
  try {
    const { id } = await req.params;
    if (id !== '63f24b883ab11c8ca4db5712') {
      const result = await gallery.findByIdAndDelete(id);
      deleteImage(result.image.id);
      return res.status(200);
    }
  } catch (error) {
    res.status(500).res.json({ message: error.message });
  }
};

module.exports = { create_one, get_gallery, get_one, update_one, delete_one };
