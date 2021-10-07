import { getCurrentDate } from './ListsActions'
import React, { createContext, useReducer, useState } from 'react'
import { listsReducers } from './ListsReducers'
//import data from axios library
export const StoreContext = createContext(null)

function StoreProvider({ children }) {
    const [user, setUser] = useState({
        name: '',
    })
    const [lists, dispatch] = useReducer(listsReducers, [])
    const [openedList, setOpenedList] = useState(null)
    const [createNewList, setCreateNewList] = useState(false)

    return (
        <StoreContext.Provider value={{
            user,
            setUser,
            lists,
            dispatch,
            openedList,
            setOpenedList,
            createNewList,
            setCreateNewList
        }} >
            {children}
        </ StoreContext.Provider>
    )
}

export default StoreProvider
