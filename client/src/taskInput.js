import {useState} from "react"
import axios from "axios"

const TaskInput = () => {
    const [note, setNote] = useState("")
    
    const submit = () => {
        axios.post("/api/tasks", note).then(() => {
            setNote("")
        })
    }

/* The idea is to try and remove the form, and try a regular input type as the form is 
causing the entire list to refresh. The goal is for just the bottom taskRow to refresh,
as well as the input bar. I've gotten rid of all counters and navigators, cannot figure 
out what is causing the parent compnent to understand that something in the child has 
changed. Is the submit form communicating this, and will deleting it break this? */

    return (
        <tr>
            <td />
            <td>
                <form onSubmit = {submit}>
                    <input type="text" value={note}
                        onChange = {(e) => setNote(e.target.value)} />
                </form>
            </td>
        </tr>
    )
}

export default TaskInput