import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Homepage.module.scss'
function Homepage() {
    return (
        <>
            <section className={styles.wrapper}>
                <h2 className={styles.header}>Welcome to <b>my own!</b></h2>
                <article>
                    I have created this web to help you achieve your goals.
                    <br />
                    In the &nbsp;<i><Link to="/todo" className={styles.link}>to do</Link></i>
                    &nbsp; tab you can set your goals to simple tasks.</article>
                <hr className={styles.bar} />
                <article className={styles.motivation}>
                    <i> Goals big and small can be the stepping-stones to a happier life. </i>
                </article>
            </section>


        </>
    )
}

export default Homepage
