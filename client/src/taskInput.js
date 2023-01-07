import {useEffect, useState} from "react"

const TaskInput = () => {
    const [task, setTask] = useState("")
    
    const submit = async (e) => {
        e.preventDefault()
        console.log(task)
        fetch("/api/tasks", {
            method: "POST",
            body: (task),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(response => response.json)
    }


    return (
        <tr>
            <td />
            <td>
                <form onSubmit = {submit}>
                    <input type="text" value={task}
                        onChange = {(e) => setTask(e.target.value)} />
                </form>
            </td>
        </tr>
    )
}

export default TaskInput