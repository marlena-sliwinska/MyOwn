import React, { useContext } from 'react';
import { StoreContext } from '../../../store/StoreProvider'
import List from '../List/List';

function ListWrapper() {
    const { lists } = useContext(StoreContext)
    const renderList = lists.map(list => <List key={list.id} {...list} />)
    return (
        <ul>
            {renderList}
        </ul>
    )
}

export default ListWrapper
