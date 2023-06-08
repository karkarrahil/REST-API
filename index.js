const express = require('express');
const server = express();
const routs = require('./routes/routs');
require('dotenv').config();
const mongoose = require('mongoose');

const cors = require('cors');
const path = require('path');

server.use(cors());
server.use(express.json());
server.use('/api/v1/users', routs.router);
// server.use(express.static(path.resolve(__dirname, '../' + process.env.PUBLIC_URL)));

// server.get('*', async (req, res) => {
//   await res.sendFile(path.resolve(__dirname, '../' + process.env.PUBLIC_URL, 'index.html'));
// });

// mongoose connection and other code...


mongoose.connection.on('error',err=>{
  console.log('connection failed');
});

async function main() {
  await mongoose.connect(process.env.MONGO_ATLAS_URI);
  console.log('database connected!');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}




server.listen(8000, () => {
  console.log('server start');
});






