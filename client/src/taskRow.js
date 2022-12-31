import CompletedTask from "./completedTask"

const TaskRow = ({task}) => {
    return (
        <tr>
            <td><CompletedTask /></td>
            {/* <td>{task.completed.toString()}</td> */}
            <td>{task.note}</td>
        </tr>
    )
}

export default TaskRow