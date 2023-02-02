import axios from "axios"
import TaskRow from "./taskRow"
import TaskInput from "./taskInput"
import {useState, useEffect} from "react"

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get("/api/tasks").then((res) => {
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
                        <th>Completed</th>
                        <th class="col-6">Task Note</th>
                        <th>
                            Delete
                        </th>
                    </tr>                   
                </thead>
                <tbody>
                    {tasks.map((t) => (
                        <TaskRow key={t.id} task={t}/>
                    ))}
                    <TaskInput/>
                </tbody>
            </table>
        </div>
    )
}

export default TaskList