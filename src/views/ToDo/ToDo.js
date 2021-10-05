import React, { useContext, Suspense } from 'react'
import ListForm from '../../components/ToDo/ListForm/ListForm'
import { StoreContext } from '../../store/StoreProvider'
const ListWrapper = React.lazy(() => import('../../components/ToDo/ListWrapper/ListWrapper'))
function ToDo() {
    const { openedList, createNewList, setCreateNewList } = useContext(StoreContext)
    return (
        <div>
            <h2>ToDo</h2>
            <button onClick={() => setCreateNewList(true)}>Add new note</button>
            <Suspense fallback={<div>...loading</div>}>
                <ListWrapper />
            </Suspense>
            {openedList && <ListForm id={openedList} />}
            {createNewList && <ListForm />}
        </div>
    )
}

export default ToDo
