import {useState} from "react"
import axios from "axios"

const TaskInput = ({setCounter}) => {
    const [note, setNote] = useState("")
    
    const submit = (e) => {
        e.preventDefault()

        console.log(note)

        axios.post("/api/tasks", note).then((res) => {
            setNote("")
            // setCounter(1)
        })
    }

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