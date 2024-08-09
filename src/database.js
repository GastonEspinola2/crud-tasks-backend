import { createConnection } from "mysql2/promise"

const conectar = async() =>{
    return await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "tasks_db"
    })
}
export { conectar }