const express = require('express');
const morgan = require('morgan');
const server = express();
const routs = require('../routes/routs');
require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const cors = require('cors');
const path = require('path');

server.use(cors());
server.use(express.json());
server.use('/users', routs.router);
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_URL)));

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, process.env.PUBLIC_URL, 'index.html'));
});

// mongoose connection and other code...

server.listen(3000, () => {
  console.log('server start');
});
