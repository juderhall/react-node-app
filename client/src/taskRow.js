import CompletedTask from "./completedTask"
import DeleteButton from "./deleteButton"
import { useState } from "react"

/* Not sure why the task here requires {} when the id being passed down to the delete
button does not require them- they are both objects, are they not? */ 

const TaskRow = ({task}) => {
    return (
        <tr>
            <td><CompletedTask /></td>
            <td>{task.note}</td>
            <td><DeleteButton task_id={task.task_id}/></td>
        </tr>
    )
}

export default TaskRow