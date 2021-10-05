import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../../store/StoreProvider'
import { addList } from '../../../store/ListsActions'
import Task from '../Task/Task'
function ListForm(
    id = null,
) {
    const { lists, dispatch } = useContext(StoreContext)
    const [title, setTitle] = useState("")
    const [tasks, setTasks] = useState([])
    const handleTitleChange = e => setTitle(e.target.value)
    const handleAddNewNote = e => {
        e.preventDefault()
        const newList = {
            title,
            tasks: [
            ]
        }
        dispatch(addList(newList))

    }
    useEffect(() => {
        findEditedList(id)
        //dodaj clean up function
    }, [id])
    const findEditedList = ({ id }) => {
        if (id === null) return
        let editedListIndex
        lists.forEach((list, index) => {
            if (list.id === id) editedListIndex = index
        })
        setTasks(lists[editedListIndex].tasks)
    }
    const renderTasks = tasks.map(task => (
        <Task key={task.id} content={task.content} />
    ))
    console.log("tasks", tasks)
    return (
        <form onSubmit={handleAddNewNote}>
            <label> Tytuł notatki
                <input value={title} onChange={handleTitleChange} />
            </label>
            <button>add list</button>
            {renderTasks}
        </form>
    )
}

export default ListForm
