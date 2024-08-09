import { Router } from "express"

const taskRouter = Router()

import {
    mostrarTareas,
    borrarTarea,
    cambiarTarea,
    mostrarTarea,
    agregarTarea
} from "./controllers.js"
import { validacionesAgregarTask, validacionesBorrarTask, validacionesMostrarTask, validacionesTasksActualizar } from "./validaciones.js"
import { aplicarValidaciones } from "./aplicarValidaciones.js"


taskRouter.get("/",mostrarTareas)
taskRouter.post("/",validacionesAgregarTask,aplicarValidaciones,agregarTarea)
taskRouter.get("/:id",validacionesMostrarTask,aplicarValidaciones,mostrarTarea)
taskRouter.put("/:id",validacionesTasksActualizar,aplicarValidaciones,cambiarTarea)
taskRouter.delete("/:id",validacionesBorrarTask,aplicarValidaciones,borrarTarea)


export { taskRouter };