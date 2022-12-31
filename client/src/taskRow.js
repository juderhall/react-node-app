import CompletedTask from "./completedTask"

const TaskRow = ({task}) => {
    return (
        <tr>
            <td><CompletedTask completed={task.completed}/></td>
            {/* <td>{task.completed.toString()}</td> */}
            <td>{task.note}</td>
        </tr>
    )
}

export default TaskRow