const TaskRow = ({task}) => {
    return (
        <tr>
            <td>{task.completed}</td>
            <td>{task.note}</td>
        </tr>
    )
}

export default TaskRow