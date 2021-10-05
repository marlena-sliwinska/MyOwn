import React from 'react'

function Task({ content, id }) {
    return (
        <div>
            {content}
            <button
            /*  onClick={() => deleteTask(id)} */
            >
                X</button>
        </div>
    )
}

export default Task
