import {useState} from "react"
import axios from "axios"

const TaskInput = () => {
    const [note, setNote] = useState("")

    console.log(note)
    
    const submit = (e) => {
        const {key} = e;
        
        if(key === 'Enter') {
            axios.post("/api/tasks", note).then(() => {
                setNote("")
            })
        }
    }

/* 
   I have removed the form tag and opted for an input tag hoping that it would fix
   the way that react loads the TaskList component- with the form tag in refreshes
   the entire list and looks very clunky. I have confirmed that the input tag is
   working completed, but it is no longer refreshing the list at all- going to try
   the counter method once more!
*/

    return (
        <tr>
            <td />
            <td>
                {/* <form onSubmit = {submit}>
                    <input type="text" value={note}
                        onChange = {(e) => setNote(e.target.value)} />
                </form> */}
                <input
                    type="text"
                    id="note"
                    value={note}
                    onKeyDown={submit}
                    onChange={(e) => setNote(e.target.value)}
                />
            </td>
        </tr>
    )
}

export default TaskInput