require('dotenv').config();
const path = require('path');
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333, () => console.log('Application running ...'));