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
cause the entire thing to refresh. Is it? I've gotten rid of all counters and navigators,
and I literally cannot figure out what is cause the parent compnent to understand that
something in the child is refreshing. Is it the submit for?
*/

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