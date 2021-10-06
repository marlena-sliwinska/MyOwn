import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../../store/StoreProvider'
import { addList, editList } from '../../../store/ListsActions'
import Portal from '../../Portal/Portal'
import Task from '../Task/Task'
import TaskForm from '../TaskForm/TaskForm'

function ListForm({ id = null, }) {
    const { lists, dispatch, setOpenedList, setCreateNewList } = useContext(StoreContext)
    const [title, setTitle] = useState('')
    const [tasks, setTasks] = useState([])
    const handleTitleChange = e => setTitle(e.target.value)
    const handleSaveNote = e => {
        e.preventDefault()
        if (id) {
            const editedList = {
                title,
                id,
                tasks
            }
            dispatch(editList(editedList))
            setOpenedList(null)
        } else {
            const newList = {
                title,
                tasks: [
                ]
            }
            dispatch(addList(newList))
            setCreateNewList(false)
        }
    }

    useEffect(() => {

        findEditedList(id)
        //dodaj clean up function
    }, [id])
    const handleAddNewTask = (newTask) => {
        setTasks(prev => ([...prev, newTask]))
    }
    const handleRemoveOneTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    const findEditedList = (id) => {

        //dlaczego tu jest obiekt
        if (id === null) return
        let editedListIndex
        lists.forEach((list, index) => {
            if (list.id === id) editedListIndex = index
        })
        setTasks(lists[editedListIndex].tasks)
        setTitle(lists[editedListIndex].title)
    }

    const renderTasks = tasks.map(task => (
        <Task key={task.id} {...task} deleteTask={handleRemoveOneTask} />
    ))
    return (
        <Portal>

            <form onSubmit={handleSaveNote} method="dialog">
                <label> Tytuł notatki
                    <input value={title} onChange={handleTitleChange} />
                </label>

                <TaskForm add={handleAddNewTask} />
                {renderTasks}
                {/* <button>cancel</button> */}
                <button type="submit">{id ? "save changes" : "save list"}</button>
            </form>

        </Portal>
    )
}

export default ListForm
