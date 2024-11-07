import User from "../modules/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'
import dotenv from 'dotenv';
dotenv.config();

// ! CRUD OPERATION

// create a new user 
const registerUser = async (req, res) => {

  const { dni, first_name, last_name, dob, phone_number, email, password, username } = req.body;

  if (!dni || !first_name || !last_name || !dob || !phone_number || !email || !password || !username) {
    return res.status(400).json('Process failed: Incomplete data')
  };

  try {
    // Encriptar la contraseña con ayuda de Bcrypt
    const saltRounds = 10 // No. de veces que se aplica el algoritmo de encriptación

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    req.body.password = hashedPassword // asigna la contraseña ya hash al body para el password

    const newUser = await User.create(req.body);

    // PERO.... debemos eliminar la contraseña del objeto de respuesta por seguridad. Mongo ignora las propiedades que tienene el valor de undefined, por lo que podemos hacer lo siguiente.
    newUser.password = undefined

    return res.status(201).json({ message: 'User registered', newUser })
  } catch (error) {
    res.status(500).json({ message: "Error Creating User", error: error.message });
  }

};

// login user 
const loginUser = async () => {

};

// get all users
const getAllUsers = async (req, res) => {
  try {

  } catch (error) {

  }
};

// get user by id
const getUserById = async (req, res) => {
  try {

  } catch (error) {

  }
};



// update user by id
const updateUser = async (req, res) => {
  try {

  } catch (error) {

  }
};

// delete user by id with hard delete operation and soft delete operation
const deleteUser = async (req, res) => {
  try {

  } catch (error) {

  }
};


export {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};