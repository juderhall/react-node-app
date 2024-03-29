require('dotenv').config()
const PORT = process.env.PORT

const bodyParser = require("body-parser")
const express = require("express")
const app = express()
app.use(bodyParser.text({type:"*/*"}))
app.use(bodyParser.urlencoded({ extended: true }))

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

app.delete("/api/tasks/:id", (req, res) => {
    const {id} = req.params
    console.log(id)
    sequelize.query(`
        DELETE FROM tasks
        WHERE task_id = '${id}'
    `).then(() => {
        res.sendStatus(200)
    })
})

app.post("/api/tasks", (req, res) => {
    console.log(req.body)
    const note = req.body
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