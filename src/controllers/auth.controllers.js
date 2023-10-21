const { response } = require("express");
const bcrypt = require("bcryptjs");
const { User } = require("../models/db");

const createUser = async (req, res) => {

    try {
     
      // Se encripta la contraseña
      const salt = bcrypt.genSaltSync(10); 
      req.body.password = bcrypt.hashSync(req.body.password, salt);
  
      // Se crea el usuario
      const newUser = await User.create(req.body);

      // Se define el password como undefined para no mostrarlo en la respuesta
      newUser.password = undefined;
  
      // Se envía la respuesta, con status 201 (creado) y el usuario creado
      return res.status(201).json({
        ok: true,
        msg: "User created successfully",
        data: newUser,
      });

    } catch (error) {
      // Si hay un error, se envía la respuesta con status 500 (error interno del servidor) y el error
      return res.status(500).json({
        ok: false,
        msg: "Error creating user"
      });
    }
  };
  

const loginUser = async (req, res) => {

    try {
      // Se busca el usuario por el email
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      });
      // Si no existe el usuario, se envía una respuesta con status 401 (Unauthorized) y un mensaje
      if(!user){
          return res.status(401).json({
              ok: false,
              msg: 'Incorrects credentials'
          });
      }
      
      // Se compara la contraseña enviada en el body con la contraseña del usuario
      const validPassword = bcrypt.compareSync(req.body.password, user.password);
  
      // Si la contraseña no es válida, se envía una respuesta con status 401 (Unauthorized) y un mensaje
      if(!validPassword){
          return res.status(401).json({
              ok: false,
              msg: 'Incorrects credentials'
          });
      }
  
      // Se define el password como undefined para no mostrarlo en la respuesta
      user.password = undefined;
  
      // Se envía la respuesta, con status 200 (ok) y el usuario logueado
      return res.status(200).json({
          ok: true,
          msg: 'User logged successfully',
          data: user
      });
  
  
    } catch (error) {
     // Si hay un error, se envía la respuesta con status 500 (error interno del servidor) y el error
      return res.status(500).json({
        ok: false,
        msg: "Error login user"
      });
    }
  };
  
  module.exports = {
    createUser,
    loginUser,
  };
  
