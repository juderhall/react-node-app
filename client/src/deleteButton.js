import axios from 'axios'

const DeleteButton = (id, {counter, setCounter}) => {

    const deleteTask = async (e) => {
        // e.preventDefault()
    
        console.log(id)

        await axios.delete(`/api/tasks/${id.task_id}`).then(() => {
            
        })
  
    }
    
    return(
        <>
            <button onClick={deleteTask}>X</button>
        </>
    )
}

export default DeleteButton