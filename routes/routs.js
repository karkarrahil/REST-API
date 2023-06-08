const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
// const user = require('../application.json')




router.get('/', userController.getUser)
    .get('/:id', userController.singleUser)
    .post('/', userController.addUser)
    .put('/:id', userController.putUser)
    .patch('/:id', userController.patchUser)
    .delete('/:id', userController.deleteUser)

exports.router = router
