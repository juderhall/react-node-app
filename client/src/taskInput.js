import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const TaskInput = ({counter, setCounter}) => {
    const [note, setNote] = useState("")
    const navigate = useNavigate()
    
    const submit = (e) => {
        // e.preventDefault()

        console.log(note)

        axios.post("/api/tasks", note).then((res) => {
            setNote("")
            setCounter(counter++)
            console.log(counter + "taskInput")
        })
    }

//remove form + create div onSubmit

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