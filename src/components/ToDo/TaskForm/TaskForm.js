import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles from './TaskForm.module.scss'

function TaskForm({ content = "", add }) {
    const [taskInput, setTaskInput] = useState(content)

    const handleChange = e => setTaskInput(e.target.value)

    const handleAddTask = e => {
        e.preventDefault();
        const newTask = {
            content: taskInput,
            id: uuidv4()
        }
        add(newTask)
        setTaskInput("")
    }
    return (
        <>
            <article className={styles.wrapper}>
                <label >
                    <input
                        placeholder="new task..."
                        type="text"
                        className={styles.input}
                        value={taskInput}
                        onChange={handleChange}
                    />
                </label>
                <button
                    onClick={handleAddTask}
                    className={styles.button}
                >
                    Add task</button>
            </article>
        </>
    )
}

export default TaskForm
