const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

const uploadImage = async (filepath) => {
  return await cloudinary.uploader.upload(filepath, { folder: 'stacks' });
};

const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};

module.exports = { uploadImage, deleteImage };
