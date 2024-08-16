import { conectar } from "./database.js"

export const mostrarTareas = async(req, res) =>{
    const conexion = await conectar();
    const [consulta] = await conexion.query("SELECT * FROM tasks")
    if(consulta.length==0){
        res.send("No hay tareas disponibles")
    }else{
    res.send(consulta);
    }
        }

export const agregarTarea = async(req, res) =>{
    const conexion = await conectar();
    const { title, description, isComplete } = req.body;
    if(typeof(title)!="string" || typeof(description)!="string" || typeof(isComplete)!="boolean"){
        res.json("ERROR Algun dato no cumple con los requisitos")
    }else{
        const [consulta] = await conexion.query(`INSERT INTO tasks(title, description, isComplete) VALUES('${title}','${description}', ${isComplete})`);
        res.json("Se agrego una tarea con exito");
    }
}

export const mostrarTarea = async(req, res) =>{
    const conexion = await conectar();
    const id = parseInt(req.params.id);
    const [consulta] = await conexion.query(`SELECT * FROM tasks WHERE id = ${id}`)
    if(consulta.length==0){
        res.json("El id puesto no existe")
    }else{
        res.json(consulta);
    }
}

export const cambiarTarea = async(req, res) =>{
    const conexion = await conectar();
    const id = parseInt(req.params.id);
    const {title, description, isComplete} = req.body;
    const [consulta] = await conexion.query(`SELECT * FROM tasks WHERE id = ${id}`);
    if(typeof(title)!="string" || typeof(description)!="string" || typeof(isComplete)!="boolean" || consulta.length==[]){
        res.json("ERROR Algun dato no cumple con los requisitos o el id puesto no existe")
    }else{
        const [consultaCambiar] = await conexion.query(`UPDATE tasks SET title = '${title}', description='${description}', isComplete=${isComplete} WHERE id = ${id}`)
        res.json("Tarea editada con exito");
    }
}

export const borrarTarea = async(req, res) =>{
    const conexion = await conectar();
    const id = parseInt(req.params.id);
    const [consulta] = await conexion.query(`SELECT * FROM tasks WHERE id = ${id}`);
    if(consulta.length==[]){
        res.json("El id puesto para borrar no existe")
    }else{
    const [consultaBorrar] = await conexion.query(`DELETE FROM tasks WHERE id = ${id}`)
    res.json("La tarea se borro con exito");
    }
}