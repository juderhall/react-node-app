import axios from 'axios'

const DeleteButton = (id) => {
    const deleteTask = () => {
        axios.delete(`/api/tasks/${id.task_id}`)
    }

    return(
        <form onClick={deleteTask}>
            <button>X</button>
        </form> 
    )
}

export default DeleteButton