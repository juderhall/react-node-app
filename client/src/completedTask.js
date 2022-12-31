const CompletedTask = ({completed}) => {
    return(
        // <p>{completed.toString()}</p>
        <div>
            <input 
                type="checkbox"
                checked={completed}
            />
        </div>
    )
}

export default CompletedTask