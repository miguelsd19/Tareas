const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController.js');

module.exports = function () {
    router.post('/tareas', 
        tareaController.nuevaTarea
    );

    router.get('/tareas',
        tareaController.obtenerTareas
    );

    router.get('/tareas/:id',
        tareaController.obtenerTarea
    );

    router.put('/tareas/:id',
        tareaController.actualizarTarea
    );

    router.delete('/tareas/:id',
        tareaController.eliminarTarea
    );

    return router;
}