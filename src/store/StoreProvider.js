import React, { createContext, useState } from 'react'

//import data from axios library
export const StoreContext = createContext(null)

function StoreProvider({ children }) {
    const [user, setUser] = useState({})
    const [lists, setLists] = useState([])
    return (
        <StoreContext.Provider value={{
            user
        }} >
            {children}
        </ StoreContext.Provider>
    )
}

export default StoreProvider
