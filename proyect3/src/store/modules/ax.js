import axios from 'axios'
const url="http://localhost:4000/tareas";
function add(data){
    let proyect= {
        nombre:data.nombre,
        fecha:data.fecha,
        hora:data.hora,
        prioridad:data.prioridad,
        materia:data.materia
    }
    const res= axios.post(url,proyect)
    console.log(res);

    return res;
}

function edit(data){
    const id=data._id
    let proyect= {
        nombre:data.nombre,
        fecha:data.fecha,
        hora:data.hora,
        prioridad:data.prioridad,
        materia:data.materia
    }
    const res= axios.put(url + '/' + id, proyect)
    console.log(res);

}


export default{
    add,
    edit
}