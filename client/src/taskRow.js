import CompletedTask from "./completedTask"
import DeleteButton from "./deleteButton"

const TaskRow = ({task}) => {
    return (
        <tr>
            <td><CompletedTask /></td>
            <td>{task.note}</td>
            <td><DeleteButton taskId={task.task_id}/></td>
        </tr>
    )
}

export default TaskRow