import React from 'react'
import FadeIn from 'react-fade-in'
import styles from './style.module.scss'
import { BiCloudUpload, BiCloudDownload } from "react-icons/bi";
import { clientsApi } from 'src/pages/Clients/api';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { setClients } from 'src/pages/Clients/slice';

const Header = () => {

    const dispatch = useAppDispatch()
    const { username } = useAppSelector(state => state.login)
    const { total } = useAppSelector((state) => state.clients)

    const seedDatabase = async () => {

        await dispatch(clientsApi.endpoints.seedDatabase.initiate(""))

        const { data } = await dispatch(
            clientsApi.endpoints.getClients.initiate({ limit: 30, offset: 0 })
        )

        dispatch(setClients(data))
    }

    const truncateDatabase = async () => {

        await dispatch(
            clientsApi.endpoints.truncateDatabase.initiate(null)
        )

        dispatch(setClients({ list: [], total: 0 }))
    }

    return (
        <FadeIn>
            <div className={styles.header}>
                <h1>
                    Bienvenido de nuevo, {username}. 👋
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
                <h3>Estas son las {total} personas que han comprado entradas</h3>
            </div>
        </FadeIn>
    )
}

export default Header