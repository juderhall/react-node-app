import axios from 'axios'

const DeleteButton = (id) => {
    const deleteTask = async (e) => {
        await axios.delete(`/api/tasks/${id.task_id}`).then(() => {
        })
    }
    
    return(
            <button onClick={deleteTask}>X</button> 
    )
}

export default DeleteButton