import React, { createContext, useReducer, useState } from 'react'
import { listsReducers } from './ListsReducers'
//import data from axios library
export const StoreContext = createContext(null)

function StoreProvider({ children }) {
    const [user, setUser] = useState({
        name: 'Marlena',
    })
    const [lists, dispatch] = useReducer(listsReducers, [
        {
            title: 'Zostać frontend developerem',
            id: 666,
            tasks: [
                { id: 45, content: "do końca października opanuje hooki" },
                { id: 456, content: "w listopadzie pierwsze dwa tygodnie poświece na gita" }
            ]
        },
        {
            title: 'Zrobić hanumasane',
            id: 7878,
            tasks: [
                { id: 55, content: "opświecać 30 minut dziennie na rozciąganie" },
                { id: 6969, content: "poczytać o pozycji w Anatomi jogi" }
            ]
        }
    ])
    const [openedList, setOpenedList] = useState(null)

    const handleOpenList = (id) => {
        if (id) setOpenedList(id)
        else console.log("otwórz nową listę")
        /* setOpenedList */
    }
    return (
        <StoreContext.Provider value={{
            user,
            setUser,
            lists,
            dispatch,
            openedList,
            handleOpenList
        }} >
            {children}
        </ StoreContext.Provider>
    )
}

export default StoreProvider
