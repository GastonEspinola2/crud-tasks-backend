import { body, param } from "express-validator"

export const validacionesAgregarTask = [
    body("title")
        .isString().withMessage("El title debe ser String")
        .notEmpty().withMessage("El title no debe estar vacio"),
    body("desciption")
        .isString().withMessage("La description debe ser String")
        .notEmpty().withMessage("La desciption no debe estar vacia"),
    body("isComplete")
        .isBoolean().withMessage("El isComplete debe ser Boolean")
]

export const validacionesMostrarTask = [
    param("id")
        .isInt().withMessage("El id colocado debe ser un numero")
]

export const validacionesBorrarTask = [
    param("id")
        .isInt().withMessage("El id colocado debe ser un numero")
]

export const validacionesTasksActualizar = [
    body("title")
        .optional()
        .isString().withMessage("El titulo debe ser un string"),
    body('description')
        .optional()
        .isString().withMessage("La descripcion debe ser un string"),
    body('isComplete')
        .optional()
        .isBoolean().withMessage("isComplete debe ser un boolean")
]