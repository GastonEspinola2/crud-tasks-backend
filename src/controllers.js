const ctrl = {}
const conectar = require("./database")

ctrl.mostrarTareas = async(req, res) =>{
    const conexion = await conectar();
    const [consulta] = await conexion.query("SELECT * FROM TASKS")
    if(consulta.length==0){
        res.send("No hay tareas disponibles")
    }else{
    res.send(consulta);
    }
        }

ctrl.agregarTarea = async(req, res) =>{
    const conexion = await conectar();
    const { title, description, isComplete } = req.body;
    if(typeof(title)!="string" || typeof(description)!="string" || typeof(isComplete)!="boolean"){
        res.send("ERROR Algun dato no cumple con los requisitos")
    }else{
        const [consulta] = await conexion.query(`INSERT INTO tasks(title, description, isComplete) VALUES('${title}','${description}', ${isComplete})`);
        res.send("Se agrego una tarea con exito");
    }
}

ctrl.mostrarTarea = async(req, res) =>{
    const conexion = await conectar();
    const id = parseInt(req.params.id);
    const [consulta] = await conexion.query(`SELECT * FROM TASKS WHERE id = ${id}`)
    if(consulta.length==0){
        res.send("El id puesto no existe")
    }else{
        res.send(consulta);
    }
}

ctrl.cambiarTarea = async(req, res) =>{
    const conexion = await conectar();
    const id = parseInt(req.params.id);
    const {title, description, isComplete} = req.body;
    const [consulta] = await conexion.query(`SELECT * FROM TASKS WHERE id = ${id}`);
    if(typeof(title)!="string" || typeof(description)!="string" || typeof(isComplete)!="boolean" || consulta.length==[]){
        res.send("ERROR Algun dato no cumple con los requisitos o el id puesto no existe")
    }else{
        const [consultaCambiar] = await conexion.query(`UPDATE tasks SET title = '${title}', description='${description}', isComplete=${isComplete} WHERE id = ${id}`)
        res.send("Tarea editada con exito");
    }
}

ctrl.borrarTarea = async(req, res) =>{
    const conexion = await conectar();
    const id = parseInt(req.params.id);
    const [consulta] = await conexion.query(`SELECT * FROM TASKS WHERE id = ${id}`);
    if(consulta.length==[]){
        res.send("El id puesto para borrar no existe")
    }else{
    const [consultaBorrar] = await conexion.query(`DELETE FROM TASKS WHERE id = ${id}`)
    res.send("La tarea se borro con exito");
    }
}

module.exports = ctrl;