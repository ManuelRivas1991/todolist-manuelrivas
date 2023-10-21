const express = require('express');
const { connectToDB } = require("./config/sequelize");

const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");

connectToDB(); // connect to database

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/todolist", taskRoutes)

app.listen(8080, () => {
  console.log('Server running on port 8080');
});