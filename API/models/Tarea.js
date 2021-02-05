const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tareaSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    fecha: {
        type: String,
        trim: true
    },
    hora: {
        type: String,
        trim: true
    },
    prioridad: {
        type: String,
        trim: true
    },
    materia: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Tarea', tareaSchema);