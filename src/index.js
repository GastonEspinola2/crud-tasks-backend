import cors from "cors";
import express, { json } from "express";
import morgan from "morgan";
import { taskRouter } from "./routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(json());
app.use("/tasks", taskRouter)

app.listen(4000, ()=>{
    console.log("Serivdor funcionando en el puerto 4000")
})