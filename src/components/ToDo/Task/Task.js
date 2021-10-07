import React, { useEffect } from 'react'
import styles from './Task.module.scss'
function Task({ content, id, deleteTask, isDone, changeStatus }) {

    const statusBtnClass =
        `${!isDone ? styles.status : `${styles.status} ${styles.statusDone}`
        }`
    return (
        <article className={styles.item}>
            <label htmlFor="status">
                <input
                    id="status"
                    type="checkbox"
                    checked={isDone}
                    onChange={(e) => changeStatus(e, id)}
                    className={statusBtnClass}
                />
            </label>
            {/*        <button
                className={statusBtnClass}
                onClick={() => changeStatus(id)}
                type="button"
            >
            </button> */}
            <div className={styles.itemContainer}>
                <p
                    className={styles.itemTxt}
                >{content}</p>
                <div className={styles.bar}></div>
            </div>
            <button
                type="button"
                className={styles.deleteTask}
                onClick={() => deleteTask(id)}>
            </button>
        </article>
    )
}

export default Task
