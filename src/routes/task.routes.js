const router = require('express').Router();
const { 
    createTask, 
    getTasksByUserId,
    getTaskById,
    updateTaskById,
    deleteTaskById
} = require("../controllers/task.controllers");

router.post("/", createTask)  
router.get("/userId/:userId", getTasksByUserId)
router.get("/taskId/:id", getTaskById)
router.put("/taskId/:id", updateTaskById) 
router.delete("/taskId/:id", deleteTaskById)  

module.exports = router;