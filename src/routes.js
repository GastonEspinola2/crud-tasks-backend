import { Router } from "express"

const taskRouter = Router()

import {
    mostrarTareas,
    borrarTarea,
    cambiarTarea,
    mostrarTarea,
    agregarTarea
} from "./controllers.js"
import { validacionesAgregarTask, validacionesMostrarTask } from "./validaciones.js"
import { aplicarValidaciones } from "./aplicarValidaciones.js"


taskRouter.get("/",mostrarTareas)
taskRouter.post("/",validacionesAgregarTask,aplicarValidaciones,agregarTarea)
taskRouter.get("/:id",validacionesMostrarTask,aplicarValidaciones,mostrarTarea)
taskRouter.put("/:id",cambiarTarea)
taskRouter.delete("/:id",borrarTarea)


export { taskRouter };