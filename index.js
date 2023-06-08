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


main().then(() => {
  console.log("database connected! ")
}).catch(err => console.log(err))


async function main() {
  await mongoose.connect(process.env.MONGO_ATLAS_URI);
  console.log('database connected!');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}




server.listen(8000, () => {
  console.log('server start');
});






