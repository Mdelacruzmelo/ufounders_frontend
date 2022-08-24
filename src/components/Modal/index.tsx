import * as React from 'react';
import styles from './style.module.scss'

const Modal = ({ visible, children }: any) => {
    return (
        <div className={`${styles.modalOverlay} ${visible ? styles.visible : styles.hidden}`}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>
    )
}

export default Modal