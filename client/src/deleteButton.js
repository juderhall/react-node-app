import axios from 'axios'

const DeleteButton = (id) => {

    const deleteTask = async (e) => {
        e.preventDefault()
    
        console.log(id)

        await axios.delete(`/api/tasks/${id.task_id}`)
  
    }
    
    return(
        <>
            <button onClick={deleteTask}>X</button>
        </>
    )
}

export default DeleteButton