import * as React from 'react';
import styles from './style.module.scss'

const Drawer = ({ visible, children }: any) => {
    return (
        <div className={`${styles.drawerOverlay} ${visible ? styles.visible : styles.hidden}`}>
            <div className={styles.drawer}>
                {children}
            </div>
        </div>
    )
}

export default Drawer