import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../../store/StoreProvider'
import List from '../List/List';
import styles from './ListWrapper.module.scss'

function ListWrapper() {
    const { lists, openedList, createNewList, } = useContext(StoreContext)
    const renderList = lists.map(list => <List key={list.id} {...list} />)
    return (
        <ul
            className={openedList || createNewList ? styles.wrapperDeactive : styles.wrapper}>

            {renderList}
        </ul>
    )
}

export default ListWrapper
