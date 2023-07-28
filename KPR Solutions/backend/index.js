const dotenv = require('dotenv').config();
const express = require('express');
const db = require('./config/db');
const image = require('./router/imageRouter');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', image);
app.use('/uploads', express.static(path.join(__dirname, 'images')));
db;

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
