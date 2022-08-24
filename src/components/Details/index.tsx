import React from 'react'
import { Icons } from 'src/components'
import styles from './style.module.scss'
import { AiOutlineCloseCircle } from "react-icons/ai";

const Details = () => {

    // This must be in redux
    const details = {
        "_id": "612f24359e1f0d6777dacd5b",
        "ticket": 0,
        "present": true,
        "firstName": "Sasha",
        "lastName": "Nixon",
        "birthdate": "2/6/1973",
        "email": "sashanixon@polarium.com",
        "phone": "(806) 468-2961",
        "address": "729 Gilmore Court, Cartwright, Delaware"
    }


    return (
        <div className={styles.detailsContainer}>

            <div className={styles.header}>

                <div className={styles.modalTitle}>
                    <div className={`${styles.imageContainer} ${styles.modal} ${details.present ? styles.present : ''}`}>
                        <Icons type={7} />
                    </div>
                    <div className={styles.username}>
                        <div>{`${details.firstName} ${details.lastName}`}</div>
                        <span>
                            {details.present ? 'Ha entrado' : 'No ha entrado'}
                        </span>
                    </div>
                </div>

                <button className={styles.closeButton}>
                    <AiOutlineCloseCircle />
                </button>

            </div>

            <div className={styles.info}>
                <div className={`${styles.labelValue} ${styles.w35}`}>
                    <label>ID</label>
                    <div>{details._id}</div>
                </div>
                <div className={`${styles.labelValue} ${styles.w65}`}>
                    <label>Nº de ticket</label>
                    <div>{details.ticket}</div>
                </div>
                <div className={`${styles.labelValue} ${styles.w35}`}>
                    <label>Fecha de nacimiento</label>
                    <div>{details.birthdate}</div>
                </div>
                <div className={`${styles.labelValue} ${styles.w35}`}>
                    <label>Email</label>
                    <div>{details.email}</div>
                </div>
                <div className={`${styles.labelValue} ${styles.w30}`}>
                    <label>Teléfono</label>
                    <div>{details.phone}</div>
                </div>
                <div className={`${styles.labelValue} ${styles.w100}`}>
                    <label>Dirección</label>
                    <div>{details.address}</div>
                </div>
            </div>

        </div>
    )
}

export default Details;