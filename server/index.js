require('dotenv').config()
const PORT = process.env.PORT
const CONNECTION_STRING = process.env.CONNECTION_STRING

const express = require("express")
const app = express()

const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
        rejectUnauthorized: false
        }
    }
})

// const taskArray = [
//     {
//         id: 0,
//         completed: false,
//         note: "work on final project"
//     },
//     {
//         id: 1,
//         completed: false,
//         note: "schedule doctors appointment"
//     }
// ]

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"})
})

app.get("/api/tasks", (req, res) => {
    sequelize.query(`
        DROP TABLE IF EXISTS tasks;

        CREATE TABLE tasks (
            task_id SERIAL PRIMARY KEY,
            completed BOOLEAN,
            note VARCHAR
        );

        insert into tasks 
            (completed, note)
        VALUES
            (true, 'work on final'),
            (false, 'schedule work call');

        SELECT * FROM tasks
    `).then((dbRes) => {
        res.status(200).send(dbRes[0])
    })
})

app.post("/api/tasks", (req, res) => {
    console.log("I have been reached")
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})