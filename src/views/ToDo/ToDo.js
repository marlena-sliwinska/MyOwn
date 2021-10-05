import React, { useContext, Suspense } from 'react'
import ListForm from '../../components/ToDo/ListForm/ListForm'
import { StoreContext } from '../../store/StoreProvider'
const ListWrapper = React.lazy(() => import('../../components/ToDo/ListWrapper/ListWrapper'))
function ToDo() {
    const { openedList } = useContext(StoreContext)
    return (
        <div>
            <h2>ToDo</h2>
            <button>Add new note</button>
            <Suspense fallback={<div>...loading</div>}>
                <ListWrapper />
            </Suspense>
            {openedList && <ListForm id={openedList} />}
        </div>
    )
}

export default ToDo
