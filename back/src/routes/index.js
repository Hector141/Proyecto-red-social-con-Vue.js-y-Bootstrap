const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser, getUserById, login } = require('../controllers/userControllers');
const { createPost, getPosts, updatePost } = require('../controllers/postsControllers');


//Rutas Gets

router.get('/users', getUsers);
router.get('/users/:userId', getUserById);
router.get('/posts', getPosts);

//Rutas post

router.post('/users', createUser);
router.post('/posts', createPost);
router.post('/login', login);

//rutas put

router.put('/users/:id', updateUser)
router.put('/posts/:postId', updatePost);

module.exports = router;
