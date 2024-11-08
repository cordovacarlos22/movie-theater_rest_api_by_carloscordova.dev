import User from "../modules/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
import dotenv from 'dotenv';
dotenv.config();


// register user 
const registerUser = async (req, res) => {

  const { dni, first_name, last_name, dob, phone_number, email, password, username } = req.body;

  if (!dni || !first_name || !last_name || !dob || !phone_number || !email || !password || !username) {
    return res.status(400).json('Process failed: Incomplete data')
  };

  try {
    // Encriptar la contraseña con ayuda de Bcrypt
    const saltRounds = 10 // No. de veces que se aplica el algoritmo de encriptación
    const pepper = process.env.SECRET_KEY
    const hashedPassword = await bcrypt.hash(password + pepper, saltRounds);

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
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json('Process failed: Incomplete data')
  }

  try {
    const user = await User.findOne({ email, username});

    if (!user) {
      return res.status(400).json({ message: 'Process failed: Email or Password error' })
    }
    const pepper = process.env.SECRET_KEY
    const match = await bcrypt.compare(password + pepper, user.password);

    if (!match) {
      return res.status(400).json({ message: 'Process failed: Invalid email or password' })
    }

    // generar token
    const payload = {
      _id: user._id,
      email: user.email,
      role: user.role,
      username: user.username,

      iat: Math.floor(Date.now() / 1000), // Fecha de creación del token en segundos
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7) // Fecha de expiración del token en 7 días
    }

    const token = jwt.encode(payload, process.env.SECRET_KEY);
    console.log();
    return res.status(200).json({ message: 'User logged in', token })

  } catch (error) {
    res.status(400).json({ message: 'Process failed: Invalid email or password' });
  }
};


export {
  registerUser,
  loginUser
};