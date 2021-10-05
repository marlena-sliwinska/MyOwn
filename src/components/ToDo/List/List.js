import React, { useContext } from 'react'
import { StoreContext } from '../../../store/StoreProvider'
import styles from './List.module.scss'

function List({ title, id }) {
    const { setOpenedList } = useContext(StoreContext)
    return (
        <li className={styles.wrapper}>

            <article  >
                <h2 className={styles.title}>{title}</h2>
                <button
                    className={styles.open}
                    onClick={() => setOpenedList(id)}
                >open</button>
                <details>
                    <summary>
                        details
                    </summary>
                    <p> Created at:</p>
                    <p> Last update at:</p>
                    <p> Completition: </p>
                </details>
            </article>
        </li>
    )
}

export default List
