import React, { useContext } from 'react'
import { StoreContext } from "../../store/StoreProvider";

function Header() {
    const { user } = useContext(StoreContext)
    return (
        <header>
            <h1>LOGO</h1>
            <nav>
                <ul>

                </ul>
            </nav>
            <p>Witaj {user.name}! </p>
        </header>
    )
}

export default Header