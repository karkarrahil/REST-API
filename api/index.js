const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const server = express();
const routs = require('../routes/routs')
require('dotenv').config()
const mongoose = require('mongoose')
const { Schema } = mongoose;
const cors = require('cors')
const path = require('path')
// server.get('/',(req,res)=>{
//     console.log(req.url)
//     res.status(201).send('<h1>Hello World</h1>');


// })

// server.get('/demo',(req,res)=>{
//           res.sendFile('D:/NodeJs/application.json')
// })

// console.log('env',process.env.PASSWORD_DB)




// atlas password

// atlas@2023


// body parser 
// it is  read data from body it consider json 
// server.use(morgan('common'))
server.use(cors())
// server.use(express.static('dist'))

server.use(express.json());
server.use('/users', routs.router)
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_URL)))
server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})
// const auth = (req, res, next) => {

//     // console.log(req.method,req.ip,req.hostname,req.get('User-Agent'));

//     console.log(req.body, req.method);


//     if (req.body.password === "admin@124") {
//         next()
//     } else {
//         res.sendStatus(401);
//     }
//     next();
// }

// mongoose 

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_ATLAS_URI);
    console.log('database connected!')
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}






function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

server.listen(3000, () => {
    console.log('server start');
});



