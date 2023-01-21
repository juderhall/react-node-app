require('dotenv').config()
const PORT = process.env.PORT
//const CONNECTION_STRING = process.env.CONNECTION_STRING

const bodyParser = require("body-parser")
const express = require("express")
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
        rejectUnauthorized: false
        }
    }
})

app.post("/api/seed", (req, res) => {
    sequelize.query(`
        DROP TABLE IF EXISTS tasks;

        CREATE TABLE tasks (
            task_id SERIAL PRIMARY KEY,
            note VARCHAR
        );
    `).then((dbRes) => {
        res.sendStatus(200)
    })
})

app.get("/api/tasks", (req, res) => {
    sequelize.query(`
        SELECT * FROM tasks
    `).then((dbRes) => {
        res.status(200).send(dbRes[0])
    })
})

app.delete("/api/tasks/id", (req, res) => {
    const id = req.body
    console.log(id)
    sequelize.query(`

    `).then(() => {
        res.sendStatus(200)
    })
})

app.post("/api/tasks", (req, res) => {
    const {note} = req.body
    console.log(note)
    sequelize.query(`
        insert into tasks 
            (note)
        VALUES
            ('${note}')
    `).then(() => {
        res.sendStatus(200)
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})