import {useEffect, useState} from "react"

const TaskInput = () => {
    const [task, setTask] = useState("")
    
    const submit = (e) => {
        e.preventDefault()
        console.log(task)
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