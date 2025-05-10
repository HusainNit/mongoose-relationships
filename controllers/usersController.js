const User = require("../models/user.js");

const createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.send(newUser);
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).populate("tasks");
  res.send(user);
};

module.exports = {
  createUser,
  getUserById,
};
