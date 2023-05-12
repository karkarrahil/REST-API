const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
// const user = require('../application.json')


// const handlePost = (req, res, next) => {
//     const data = req.body;
//     console.log(data);
//     const isAlreadyExist = user.some(user => {
//         let differentId = JSON.stringify(user.id) === JSON.stringify(data.id);
//         let alreadyExist = JSON.stringify(user) === JSON.stringify(data);
//         if (differentId || alreadyExist) {
//             return true;
//         }
//         return false;
//     });
//     if (isAlreadyExist) {
//         res.json({ message: 'the user is already exists', code: 304 });
//     } else {
//         next();
//     }

// }

router.get('/', userController.getUser)
    .get('/:id', userController.singleUser)
    .post('/', userController.addUser)
    .put('/:id', userController.putUser)
    .patch('/:id', userController.patchUser)
    .delete('/:id', userController.deleteUser)

exports.router = router
