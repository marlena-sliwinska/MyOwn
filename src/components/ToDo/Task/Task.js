import React from 'react'
import styles from './Task.module.scss'
function Task({ content, id, deleteTask, isDone = true }) {
    //przekaż stwórz w obiekcie isDone
    const statusBtnClass = `${!isDone ? styles.status : `${styles.status} ${styles.statusDone}`
        }`;
    return (
        <article className={styles.item}>
            <button
                className={statusBtnClass}
            /* onClick={() => status} */
            ></button>
            <div className={styles.itemContainer}>
                <p
                    className={styles.itemTxt}
                >{content}</p>
                <div className={styles.bar}></div>
            </div>
            <button
                className={styles.deleteTask}
                onClick={() => deleteTask(id)}>
            </button>
        </article>
    )
}

export default Task
