import axios from 'axios'
import {useState} from 'react'

const DeleteButton = (id) => {
    const deleteTask = () => {
        axios.delete(`/api/tasks/${id.task_id}`)
    }

    return(
            <button onClick={deleteTask}>X</button> 
    )
}

export default DeleteButton