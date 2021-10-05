import React, { Suspense } from 'react'
const ListWrapper = React.lazy(() => import('../../components/ToDo/LIstWrapper/ListWrapper'))
function ToDo() {
    return (
        <div>
            ToDo
            <Suspense fallback={<div>...loading</div>}>
                <ListWrapper />
            </Suspense>
        </div>
    )
}

export default ToDo
