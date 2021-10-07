import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../../store/StoreProvider'
import { addList, editList, removeList } from '../../../store/ListsActions'
import Portal from '../../Portal/Portal'
import Task from '../Task/Task'
import TaskForm from '../TaskForm/TaskForm'
import styles from './ListForm.module.scss'
import classNames from 'classnames/bind';

function ListForm({ id = null, }) {
    const { lists, dispatch, setOpenedList, setCreateNewList } = useContext(StoreContext)
    const [title, setTitle] = useState('')
    const [tasks, setTasks] = useState([])


    const handleTitleChange = e => setTitle(e.target.value)
    const handleDeleteNote = e => {
        e.preventDefault()
        dispatch(removeList({ id }))
        setOpenedList(null)
    }
    const handleCancelNote = e => {
        e.preventDefault()
        setOpenedList(null)
        setCreateNewList(false)
    }
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


    const handleAddNewTask = (newTask) => {
        setTasks(prev => ([...prev, newTask]))
    }
    const handleRemoveOneTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    const handlechangeTaskStatus = (e, taskId) => {
        setTasks(
            () => (
                tasks.map(task => {
                    if (task.id === taskId) {
                        task.isDone = e.target.checked
                    }
                    return task
                })
            ))
    }
    const findEditedList = (id) => {
        if (id === null) return
        let editedListIndex
        lists.forEach((list, index) => {
            if (list.id === id) editedListIndex = index
        })
        setTasks(lists[editedListIndex].tasks)
        setTitle(lists[editedListIndex].title)
    }
    useEffect(() => {

        findEditedList(id)
        //dodaj clean up function
    }, [id])

    const renderTasks = tasks.map(task => (
        <Task
            key={task.id}
            {...task}
            deleteTask={handleRemoveOneTask}
            changeStatus={handlechangeTaskStatus} />
    ))

    let cx = classNames.bind(styles);
    let classNameSaveButton = cx({
        button: true,
        buttonSave: true
    });
    let classNameCancelButton = cx({
        button: true,
        buttonCancel: true
    });
    let classNameDeletelButton = cx({
        button: true,
        buttonDelete: true
    });
    return (
        <Portal>

            <form
                onSubmit={handleSaveNote}
                className={styles.wrapper}
            >
                <p className={styles.title}>
                    <label>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="title note"
                            value={title}
                            onChange={handleTitleChange} />
                    </label>
                </p>
                <div className={styles.bar}></div>
                <section className={styles.tasks}>
                    {renderTasks}
                </section>
                <TaskForm add={handleAddNewTask} />
                <div className={styles.buttonsContainer}>
                    {id ? <button
                        onClick={handleDeleteNote}
                        className={classNameDeletelButton}>
                        Delete List
                    </button> : null}
                    <button
                        onClick={handleCancelNote}
                        className={classNameCancelButton}>
                        Cancel
                    </button>
                    <button
                        className={classNameSaveButton}
                        type="submit">
                        {id ? "Save changes" : "Save list"}
                    </button>
                </div>
            </form>
        </Portal>
    )
}

export default ListForm
