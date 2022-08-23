import React from 'react'
import styles from './style.module.scss'

const Sidebar = ({ setOpenedSidebar }: any) => {
    return (
        <nav className={styles.sidebar}>
            <ul>
                <li>Icon 1</li>
                <li>Icon 2</li>
                <li>Icon 3</li>
                <li>Icon 4</li>
                <li>Icon 5</li>
                <li>Icon 6</li>
            </ul>
        </nav>
    )
}

export default Sidebar