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
            id: 45645645,
            tasks: [
                { id: 456645, content: "do końca października opanuje hooki" },
                { id: 456, content: "w listopadzie pierwsze dwa tygodnie poświece na gita" }
            ]
        },
        {
            title: 'Zrobić hanumasane',
            id: 45645654,
            tasks: [
                { id: 544645, content: "opświecać 30 minut dziennie na rozciąganie" },
                { id: 645, content: "poczytać o pozycji w Anatomi jogi" }
            ]
        }
    ])
    return (
        <StoreContext.Provider value={{
            user,
            setUser,
            lists,
            dispatch
        }} >
            {children}
        </ StoreContext.Provider>
    )
}

export default StoreProvider
