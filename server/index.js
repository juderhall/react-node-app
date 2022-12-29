const env = require("dotenv")
const PORT = process.env.PORT
const CONNECTION_STRING = process.env.CONNECTION_STRING

const express = require("express")
const app = express()

const taskArray = [
    {
        id: 0,
        completed: false,
        note: "work on final project"
    },
    {
        id: 1,
        completed: false,
        note: "schedule doctors appointment"
    }
]

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"})
})

app.get("/api/tasks", (req, res) => {
    res.json({taskArray})
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})