import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../../store/StoreProvider'
import styles from './List.module.scss'
import { completition } from './ListCompletitionFn'

function List({ title, id, tasks, created, updated }) {
    console.log(created)
    const { openedList, createNewList, setOpenedList } = useContext(StoreContext)
    const [completitionStatus, setCompletitionStatus] = useState({ doneTasksQuantity: '', totalTasksQuantity: '' })
    useEffect(() => {
        setCompletitionStatus(completition(tasks))
    }, [tasks])
    return (
        <li className={styles.wrapper}>
            <article className={styles.item}>
                <div className={styles.itemContainer}>
                    <h2 className={styles.title}>{title}</h2>
                    <details>
                        <summary>
                            details
                        </summary>
                        <p> Created at: {created}</p>
                        <p> Last update at: {updated}</p>
                        <p> {`Completition: ${completitionStatus.doneTasksQuantity} / ${completitionStatus.totalTasksQuantity}`}
                        </p>
                    </details>
                </div>
                <button
                    disabled={openedList || createNewList}
                    className={styles.open}
                    onClick={() => setOpenedList(id)}
                >open</button>
            </article>
        </li>
    )
}

export default List
