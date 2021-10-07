import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { taskValidationFn, taskErrorMessage } from './Validation';
import styles from './TaskForm.module.scss'
import classNames from 'classnames/bind';

function TaskForm({ content = "", add }) {
    const [taskInput, setTaskInput] = useState(content)
    const [taskValidation, setTaskValidation] = useState(true)

    const handleChange = e => {
        setTaskValidation(true)
        setTaskInput(e.target.value)
    }

    const handleAddTask = e => {
        e.preventDefault();
        if (taskValidationFn(taskInput)) {
            const newTask = {
                content: taskInput,
                id: uuidv4(),
                isDone: false,
            }
            add(newTask)
            setTaskInput("")
        } else {
            setTaskValidation(false)
        }
    }

    let cx = classNames.bind(styles);
    let classNameInput = cx({
        input: true,
        inputError: !taskValidation,
    });
    return (
        <>
            <article className={styles.wrapper}>
                <label >
                    <input
                        placeholder={taskValidation ? "new task..." : taskErrorMessage}
                        type="text"
                        className={classNameInput}
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
