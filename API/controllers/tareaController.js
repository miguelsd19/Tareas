const Tarea = require("../models/Tarea");

exports.nuevaTarea = async(req, res, next) => {

    const tarea = new Tarea(req.body);

    try {
        await tarea.save();
        res.json({mensaje: 'El cliente se añadio correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerTareas = async(req, res, next) => {
    try {
        const tareas = await Tarea.find({});
        res.json(tareas);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerTarea = async(req, res, next) => {
    try {
        const tarea = await Tarea.findById(req.params.id);
        res.json(tarea);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.actualizarTarea = async(req, res, next) => {
    try {
        const tarea = await Tarea.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        res.json(tarea);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarTarea = async(req, res, next) => {
    try {
        await Tarea.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'El cliente fue eliminado correctamente'})
    } catch (error) {
        console.log(error);
        next();
    }
}