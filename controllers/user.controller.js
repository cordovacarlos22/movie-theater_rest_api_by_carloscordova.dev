import User from "../modules/user.model.js";

// get all users
const getAllUsers = async (req, res) => {

  try {
    const user = await User.find({}, { password: 0 });
    if (!user) return res.status(404).json({ message: 'Not User Found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: "Failed to get users", error: error.message });
  }
};

// get user by id
const getUserById = async (req, res) => {

  if (!req.params.userId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: 'Invalid User ID' })
  }

  try {
    const user = await User.find({ _id: req.params.userId, isActive: true }, { password: 0 });
    
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Failed to get user ', error: error });
  }
};



// update user by id
const updateUser = async (req, res) => {

  if (!req.params.userId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: 'Invalid User ID' })
  }
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'Not User Found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Failed to get user ', error: error });
  }
};

// delete user by id with hard delete operation and soft delete operation
const deleteUser = async (req, res) => {
  // Valido que el ID sea un ObjectID de MongoDB (24 caracteres alfanuméricos en hexadecimal)// Valido que el ID sea un ObjectID de MongoDB (24 caracteres alfanuméricos en hexadecimal)
  if (!req.params.userId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: 'Invalid User ID' })
  }

  // hard delete 
  if (req.query.destroy === 'true') {
    try {
      const user = await User.findByIdAndDelete(req.params.userId)
      if (!user) {
        return res.status(404).json({ message: 'User Not found' })
      }
      return res.status(204).end()

    } catch (error) {
      res.status(400).json({ message: 'Failed to  delete user  ', error: error });
    }
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.userId, { isActive: false }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User Not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: 'Failed to delete  user ', error: error });
  }
};


export {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};