import {useState, useEffect} from "react"
import TaskRow from "./taskRow"

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

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    const fetchtasks = async () => {
        fetch("/api/tasks")
        .then((res) => res.json())
        .then((tasks) => {
            setTasks(tasks)
        })

        // const response = await fetch("/api/tasks")
        // const tasks = await response.json()
        // console.log(tasks)
        // setTasks(tasks)
    }

    // constructing and calling the function in the same space 
    // mean some kind of trouble when problem with map.array is 
    // finally fixed.
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
                </tbody>
            </table>
        </>
    )
}



export default TaskList