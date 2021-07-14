const User = require('../models/User');

// @route   GET api/users
// @desc    Get all users
// @access  Public
exports.getUsers = (req, res) => {
  return res.status(200).json({ msg: "get all users" });
};