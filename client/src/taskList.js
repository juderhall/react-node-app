import {useState, useEffect} from "react"
import TaskRow from "./taskRow"
import TaskInput from "./taskInput"

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    const fetchtasks = async () => {
        const response = await fetch("/api/tasks")
        const tasks = await response.json()
        setTasks(tasks)
    }

    useEffect(() => {
        fetchtasks()
    }, [])

    return (
        <>
            <div>
                <header> Task List</header>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Completed</th>
                        <th>Task Note</th>
                    </tr>                   
                </thead>
                <tbody>
                    {tasks.map((t) => (
                        <TaskRow key={t.id} task={t} />
                    ))}
                    <TaskInput />
                </tbody>
            </table>
        </>
    )
}

export default TaskList