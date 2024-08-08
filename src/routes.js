const router = require("express").Router();
const { mostrarTareas } = require("./controllers.js");
const { agregarTarea } = require("./controllers.js");
const { mostrarTarea } = require("./controllers.js");
const { cambiarTarea } = require("./controllers.js");
const { borrarTarea } = require("./controllers.js");


router.get("/tasks",mostrarTareas)
router.post("/tasks",agregarTarea)
router.get("/tasks/:id",mostrarTarea)
router.put("/tasks/:id",cambiarTarea)
router.delete("/tasks/:id",borrarTarea)


module.exports = router;