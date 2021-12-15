const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const controller = require('./controller');

const app = express();

app.use(cors());
app.use(express.json());

const database =
  'mongodb+srv://root:root@dcode.8tzie.mongodb.net/DCode?retryWrites=true&w=majority';

mongoose.connect(database);

app.get('/', controller.get);
app.post('/', controller.post);
app.delete('/:id', controller.delete);

app.all('/*', (req, res) => {
  res.send('URL not found!');
});

app.listen(process.env.PORT || 3000);
