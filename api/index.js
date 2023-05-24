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
server.use(express.static(path.resolve(__dirname, 'dist')));

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// mongoose connection and other code...
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_ATLAS_URI);
    console.log('database connected!')
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}









server.listen(3000, () => {
    console.log('server start');
});






