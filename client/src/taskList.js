import {useState, useEffect} from "react"
import TaskRow from "./taskRow"
import TaskInput from "./taskInput"
import axios from "axios"


const TaskList = () => {
    const [tasks, setTasks] = useState([])
    
    // const [counter, setCounter] = useState(0)



    const fetchtasks = async () => {
        const response = await fetch("/api/tasks")
        const tasks = await response.json()
        setTasks(tasks)
    }

    useEffect(() => {
        // fetchtasks()
        axios.get("/api/tasks").then((res) => {
            console.log(res.data)
            setTasks(res.data)
        })
    }, [])

    return (
        <div class="container-lg">
            <div>
                <header>To Do</header>
            </div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {/* <th>ID for Testing</th> */}
                        <th class="col-6">Task Note</th>
                        <th>
                            Delete
                        </th>
                    </tr>                   
                </thead>
                <tbody>
                    {tasks.map((t) => (
                        <TaskRow key={t.id} task={t} />
                    ))}
                    <TaskInput tasks = {tasks} setTasks = {setTasks}/>
                </tbody>
            </table>
        </div>
    )
}

export default TaskList