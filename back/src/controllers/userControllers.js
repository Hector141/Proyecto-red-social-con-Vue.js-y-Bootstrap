const { User } = require('../db');


const getUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error('Error al obtener la lista de usuarios:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
  

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear usuario' });
  }
};

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, image, password } = req.body;
  
    try {
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      if (name) user.name = name;
      if (image) user.image = image;
      if (password) user.password = password;
  
      await user.save();
  
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  };
  
  const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
      }
  
      if (user.password === password) {
        // Si la contraseña coincide, devuelve los datos del usuario
        return res.json({
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image
            // Agrega aquí otros campos del usuario que desees enviar
          }
        });
      } else {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  

  const getUserById = async (req, res) => {
    try {
      const userId = req.params.userId;
  
      const user = await User.findOne({ where: { id: userId } });
  
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en la búsqueda de usuario' });
    }
  };
  

module.exports = {
    getUsers,
    createUser,
    updateUser,
    getUserById,
    login
  };
  