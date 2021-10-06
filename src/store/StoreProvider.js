import React, { createContext, useReducer, useState } from 'react'
import { listsReducers } from './ListsReducers'
//import data from axios library
export const StoreContext = createContext(null)

function StoreProvider({ children }) {
    const [user, setUser] = useState({
        name: '',
    })
    const [lists, dispatch] = useReducer(listsReducers, [
        {
            title: 'Zostać frontend developerem',
            id: 666,
            tasks: [
                { id: 45, content: "do końca października opanuje hooki", isDone: false },
                { id: 456, content: "w listopadzie pierwsze dwa tygodnie poświece na gita", isDone: true }
            ]
        },
        {
            title: 'Zrobić hanumasane',
            id: 7878,
            tasks: [
                { id: 55, content: "opświecać 30 minut dziennie na rozciąganie", isDone: false },
                { id: 6969, content: "poczytać o pozycji w Anatomi jogi", isDone: false }
            ]
        },
        {
            title: 'Zrobić obiad',
            id: 45654654654621321,
            tasks: [
                { id: 456455, content: "kupic buraki" },
                { id: 6969, content: "upiec jabłka" }
            ]
        },
    ])
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
