const { response } = require("express")
const { Task, User } = require("../models/db");

const createTask = async (req, res) => {
    
    try {
        const { userId } = req.body;

        const user = await User.findByPk(userId);

        // Si no existe el usuario, se envía una respuesta con status 404 (Not found) y un mensaje
        if(!user){
            return res.status(404).json({
                ok: false,
                msg: 'Cannot create task, the user does not exist'
            });
        }

        // Si existe el usuario, se crea la tarea
        const newtask = await Task.create(req.body);

        // Se envía una respuesta con status 201 (Created) y un mensaje
        return res.status(201).json({
            msg: 'Task created successfully',
            data: newtask
        });

    } catch (error) {
        // Si hay un error, se envía una respuesta con status 500 (Internal server error) y un mensaje
        return res.status(500).json({
            ok: false,
            msg: 'Error creating task',
            error
        });
    }
}

const getTasksByUserId = async (req, res) => {
    
    try {
        const { userId } = req.params;

        const tasks = await Task.findAll({
            where: { userId }
        });

        // Si el usuario no tiene tareas o no existe, se envía una respuesta con status 404 (Not found) y un mensaje
        if(!tasks.length){
            return res.status(404).json({
                ok: false,
                msg: 'The task or user does not exist'
            });
        }
        
        // Se envía una respuesta con status 200 (OK) y un mensaje
        return res.status(200).json({
            ok: true,
            msg: 'Tasks found successfully',
            data: tasks
        });

    } catch (error) {
        // Si hay un error, se envía una respuesta con status 500 (Internal server error) y un mensaje
        return res.status(500).json({
            ok: false,
            msg: 'Error finding task',
            error
        });
    }
}

const getTaskById = async (req, res) => {
        
        try {
            const { id } = req.params;
    
            const task = await Task.findByPk(id);
    
            // Si no existe la tarea, se envía una respuesta con status 404 (Not found) y un mensaje
            if(!task){
                return res.status(404).json({
                    ok: false,
                    msg: 'The task does not exist'
                });
            }
    
            // Se envía una respuesta con status 200 (OK) y un mensaje
            return res.status(200).json({
                ok: true,
                msg: 'Task found successfully',
                data: task
            });
    
        } catch (error) {
            // Si hay un error, se envía una respuesta con status 500 (Internal server error) y un mensaje
            return res.status(500).json({
                ok: false,
                msg: 'Error finding task',
                error
            });
        }
}

const updateTaskById = async (req, res) => {

    try {

        const { id } = req.params;

        const updatedTask = await Task.update(req.body, {
            where: {id}
        });

        // Si no existe la tarea o la propiedad, se envía una respuesta con status 400 (Bad request) y un mensaje
        if(updatedTask[0] === 0){
            return res.status(400).json({
                ok: false,
                msg: 'The property or task does not exist'
            })
        }

        // Si se actualiza la tarea, se envía una respuesta con status 200 (OK) y un mensaje
        return res.status(200).json({
            ok: true,
            msg: 'Task updated successfully',
            data: updatedTask
        });

    } catch (error) {
        // Si hay un error, se envía una respuesta con status 500 (Internal server error) y un mensaje
        return res.status(500).json({
            ok: false,
            msg: 'Error updating task',
            error
        });
    }
}

const deleteTaskById = async (req, res) => {
    try {

        const { id } = req.params;
    
        const task = await Task.destroy({
            where: {id}
        });
        // Si no existe la tarea, se envía una respuesta con status 404 (Not found) y un mensaje
        if(!task){
            return res.status(404).json({
                ok: false,
                msg: 'The task does not exist'
            });
        }

        // Si se elimina la tarea, se envía una respuesta con status 200 (OK) y un mensaje
        return res.status(200).json({
            ok: true,
            msg: 'Task deleted successfully',
            data: task
        });

    } catch (error) {
        // Si hay un error, se envía una respuesta con status 500 (Internal server error) y un mensaje
        return res.status(500).json({
            ok: false,
            msg: 'Error deleting task',
            error
        });
    }
}

module.exports ={
    createTask,
    getTasksByUserId,
    getTaskById,
    updateTaskById,
    deleteTaskById
}
