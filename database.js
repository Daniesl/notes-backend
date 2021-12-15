const mongoose = require('mongoose');

const database = new mongoose.Schema(
  {
    title: {
      type: String,
      required: 'Title is required!',
    },
    text: {
      type: String,
      required: 'Text content is required!',
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
    },
  }
);

const Database = mongoose.model('Database', database);

module.exports = Database;
