import CompletedTask from "./completedTask"

const TaskRow = ({task}) => {
    return (
        <tr>
            <td><CompletedTask /></td>
            <td>{task.note}</td>
        </tr>
    )
}

export default TaskRow