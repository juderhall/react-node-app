const DeleteButton = (id) => {
    
    const deleteTask = async (e) => {
        e.preventDefault()
    
        await fetch("/api/tasks/id", {
            method: "DELETE",
            body: (id),
        })
    
    }
    
    return(
        <>
            <button onClick={deleteTask}>X</button>
        </>
    )
}

export default DeleteButton