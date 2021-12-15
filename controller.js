const Database = require('./database');

exports.get = (req, res) => {
  Database.find()
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'failed',
        err,
      });
    });
};

exports.post = (req, res) => {
  Database.create({ title: req.body.title, text: req.body.text })
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'failed',
        error: err,
      });
    });
};

exports.delete = (req, res) => {
  Database.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(204).json();
    })
    .catch((err) => {
      res.status(500).json({
        status: 'failed',
        err,
      });
    });
};
