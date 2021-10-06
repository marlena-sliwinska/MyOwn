import React from 'react'
import ReactDOM from "react-dom";
import { Redirect } from 'react-router';
import styles from './Portal.module.scss'


function Portal({ children }) {
    return ReactDOM.createPortal(
        <div className={styles.modal}>
            {children}
        </div>,
        document.getElementById('root-modal')
    )
}

export default Portal
