import React from 'react'
import App from './App'
import StoreProvider from './store/StoreProvider'
function Root() {
    return (
        <StoreProvider>
            <App />
        </StoreProvider>
    )
}

export default Root
