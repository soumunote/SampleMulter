const path = require('path');
const express = require('express');
const multer = require('multer');

const app = express();
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'data/')
  },
  filename: (req, res, cb) => {
    cb(null, res.originalname)
  }
});
const upload = multer({ storage: storage});

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'static/index.html')));
app.post('/', upload.single('file'), (req, res) => {
  res.send(`Upload Complete fileName(${req.file.originalname})`);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Listening Started ...');
});