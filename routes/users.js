const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/users');

router
    .route('/')
    .get(getUsers);

module.exports = router;

// const User = require('../../models/User');

// // @route   GET api/users
// // @desc    Get all users
// // @access  Public
// router.get('/', (req, res) => {
//     return res.status(200).json({ msg: "get all users" });
// });

// module.exports = router;