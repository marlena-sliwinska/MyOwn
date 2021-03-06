import styles from './ToDo.module.scss'
import React, { useContext, Suspense } from 'react'
import ListForm from '../../components/ToDo/ListForm/ListForm'
import { StoreContext } from '../../store/StoreProvider'
const ListWrapper = React.lazy(() => import('../../components/ToDo/ListWrapper/ListWrapper'))


function ToDo() {
    const { openedList, createNewList, setCreateNewList } = useContext(StoreContext)
    // zastap to biblioteka classname

    return (
        <div
            className={openedList || createNewList ? styles.contentDeactive : styles.content}>
            <h2
                className={styles.header}
            >To Do</h2>

            <Suspense fallback={<div>...loading</div>}>
                <ListWrapper />
            </Suspense>
            <button
                disabled={openedList || createNewList}
                className={styles.button}
                onClick={() => setCreateNewList(true)}>Add new note</button>
            {openedList && <ListForm id={openedList} />}
            {createNewList && <ListForm />}

        </div>
    )
}

export default ToDo
