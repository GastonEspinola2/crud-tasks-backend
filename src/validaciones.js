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