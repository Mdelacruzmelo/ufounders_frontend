import React from 'react'
import FadeIn from 'react-fade-in'
import styles from './style.module.scss'

const Header = ({ firstName = "Rodrigo" }: any) => {
    return (
        <FadeIn>
            <div className={styles.header}>
                <h1>Bienvenido de nuevo, {firstName}. 👋</h1>
                <h3>Estas son las personas que han comprado entradas</h3>
            </div>
        </FadeIn>
    )
}

export default Header