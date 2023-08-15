
/// User methods not implemented yet

const userController = require('./../controllers/userController');
const express = require('express');



const router = express.Router();

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUsers);
    //and etc

router
    .route('/:id')
    .get(userController.getUsers)
    .patch(userController.updateUsers)
    .delete(userController.deleteUsers);
    
    module.exports = router;