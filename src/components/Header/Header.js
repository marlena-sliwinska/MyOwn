import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { StoreContext } from "../../store/StoreProvider";
import styles from './Header.module.scss'

function Header() {
    const { user } = useContext(StoreContext)
    return (
        <header className={styles.wrapper}>
            <h1 className={styles.logo}>My own</h1>
            <div className={styles.header}>
                <nav className={styles.nav}>
                    <ul>
                        <li className={styles.item}>
                            <NavLink
                                to="/"
                                className={styles.link}
                                activeClassName={styles.linkIsActive}
                                exact
                            >Strona Główna</NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink
                                to="/todo"
                                className={styles.link}
                                activeClassName={styles.linkIsActive}
                                exact
                            >ToDo's</NavLink>
                        </li>
                        {/*       <li className={styles.item}>
                        <NavLink
                            to="/timer"
                            className={styles.link}
                            activeClassName={styles.linkIsActive}
                            exact
                        >Pomodoro</NavLink>
                    </li> */}
                    </ul>
                </nav>
                <p className={styles.user}>Witaj {user.name}! </p>
            </div>
        </header>
    )
}

export default Header