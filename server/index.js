require('dotenv').config()
const PORT = process.env.PORT
//const CONNECTION_STRING = process.env.CONNECTION_STRING

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

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"})
})

app.get("/api/tasks", (req, res) => {
    sequelize.query(`
        DROP TABLE IF EXISTS tasks;

        CREATE TABLE tasks (
            task_id SERIAL PRIMARY KEY,
            note VARCHAR
        );

        insert into tasks 
            (note)
        VALUES
            ('work on final'),
            ('schedule work call');

        SELECT * FROM tasks
    `).then((dbRes) => {
        res.status(200).send(dbRes[0])
    })
})

app.post("/api/tasks", (req, res) => {
    const task = request.body.task
    sequelize.query(`
        insert into tasks 
            (note)
        VALUES
            ('{"task"}')
    `).then(() => {
        res.sendStatus(200)
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})