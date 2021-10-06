import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { StoreContext } from "../../store/StoreProvider";
import styles from './Header.module.scss'

function Header() {
    const { user } = useContext(StoreContext)
    return (
        <header className={styles}>
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            activeClassName={styles.active}
                            exact
                        >Strona Główna</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/todo"
                            activeClassName={styles.active}
                            exact
                        >ToDo's</NavLink>
                    </li>
                    {/*       <li>
                        <NavLink
                            to="/timer"
                            activeClassName={styles.active}
                            exact
                        >Pomodoro</NavLink>
                    </li> */}
                </ul>
            </nav>
            <p>Witaj {user.name}! </p>
        </header>
    )
}

export default Header