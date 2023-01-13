import {useState} from "react"

const TaskInput = ({tasks, setTasks}) => {
    const [note, setNote] = useState("")
    
    const submit = async (e) => {
        e.preventDefault()

        await fetch("/api/tasks", {
            method: "POST",
            body: (note),
        })
        console.log(note)
        // let arr = [...tasks, note]
        // console.log(arr)
        // setTasks(arr)
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