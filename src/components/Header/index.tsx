import React from 'react'
import FadeIn from 'react-fade-in'
import styles from './style.module.scss'
import { BiCloudUpload, BiCloudDownload } from "react-icons/bi";
import { clientsApi } from 'src/pages/Clients/api';
import { useAppDispatch } from 'src/hooks/redux';

const Header = ({ firstName = "Rodrigo" }: any) => {

    const dispatch = useAppDispatch()

    const seedDatabase = async () => {
        await dispatch(clientsApi.endpoints.seedDatabase.initiate(""))
    }
    const truncateDatabase = async () => {
        await dispatch(clientsApi.endpoints.truncateDatabase.initiate(""))
    }

    return (
        <FadeIn>
            <div className={styles.header}>
                <h1>
                    Bienvenido de nuevo, {firstName}. 👋
                    <div className={styles.seedButton}>
                        <button onClick={seedDatabase}>
                            <BiCloudUpload />
                            <div>Seed database</div>
                        </button>
                        <button onClick={truncateDatabase}>
                            <BiCloudDownload />
                            <div>Truncate database</div>
                        </button>
                    </div>
                </h1>
                <h3>Estas son las personas que han comprado entradas</h3>
            </div>
        </FadeIn>
    )
}

export default Header