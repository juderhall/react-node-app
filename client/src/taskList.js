import {useState, useEffect} from "react"
import TaskRow from "./taskRow"
import TaskInput from "./taskInput"
import axios from "axios"


const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        axios.get("/api/tasks").then((res) => {
            setTasks(res.data)
            console.log(counter + "taskList")
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
                        <TaskRow key={t.id} task={t} setCounter={setCounter} counter={counter}/>
                    ))}
                    <TaskInput setCounter={setCounter}/>
                </tbody>
            </table>
        </div>
    )
}

export default TaskList