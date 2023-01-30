import CompletedTask from "./completedTask"
import DeleteButton from "./deleteButton"

const TaskRow = ({task, counter, setCounter}) => {
    return (
        <tr>
            <td><CompletedTask /></td>
            <td>{task.note}</td>
            <td><DeleteButton task_id={task.task_id} setCounter={setCounter} counter={counter}/></td>
        </tr>
    )
}

export default TaskRow