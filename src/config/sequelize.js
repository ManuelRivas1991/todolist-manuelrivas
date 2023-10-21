const Sequelize = require("sequelize");

const sequelize = new Sequelize("todolist", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const connectToDB = async () => { 
  try{
     await sequelize.authenticate(); 
     await sequelize.sync({ force: false }); 
     console.log("Database connected successfully");
    
  }catch(err){
    console.error(err);
  }
}

module.exports = {
  connectToDB,
  sequelize
}; 
