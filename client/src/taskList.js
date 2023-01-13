import {useState, useEffect} from "react"
import TaskRow from "./taskRow"
import TaskInput from "./taskInput"

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    
    // const [counter, setCounter] = useState(0)

    const fetchtasks = async () => {
        const response = await fetch("/api/tasks")
        const tasks = await response.json()
        setTasks(tasks)
    }

    useEffect(() => {
        fetchtasks()
        console.log(tasks)
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
                        {/* <th>ID for Testing</th> */}
                        <th>Task Note</th>
                    </tr>                   
                </thead>
                <tbody>
                    {tasks.map((t) => (
                        <TaskRow key={t.id} task={t} />
                    ))}
                    <TaskInput tasks = {tasks} setTasks = {setTasks}/>
                </tbody>
            </table>
        </>
    )
}

export default TaskList