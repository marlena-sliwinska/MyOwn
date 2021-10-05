import React from 'react'

function Task({ content, id, deleteTask }) {

    return (
        <div>
            {content}
            <button onClick={() => deleteTask(id)}>
                X</button>
        </div>
    )
}

export default Task
