import React, { useState } from 'react'
import FadeIn from 'react-fade-in'
import BarLoader from 'react-spinners/BarLoader'
import { BiCloudUpload, BiCloudDownload } from "react-icons/bi";
import { endpoints } from 'src/pages/Clients/api';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { setClients } from 'src/pages/Clients/slice';
import styles from './style.module.scss'

const Header = () => {

    const { seedDatabase, truncateDatabase } = endpoints

    const dispatch = useAppDispatch()
    const { username } = useAppSelector(state => state.login)
    const { total } = useAppSelector((state) => state.clients)
    const [loadingSeed, setLoadingSeed] = useState(false)

    const handleSeed = async () => {

        setLoadingSeed(true)
        await dispatch<any>(seedDatabase.initiate(null))
        setLoadingSeed(false)
    }

    const handleTruncate = async () => {

        await dispatch(
            truncateDatabase.initiate(
                { subscribe: false, forceRefetch: true }
            )
        )

        dispatch(setClients({ list: [], total: 0 }))
    }

    return (
        <FadeIn>

            <div className={styles.header}>

                <h1>

                    Bienvenido de nuevo, {username}. 👋

                    <div className={styles.seedButton}>

                        <button onClick={handleSeed}>
                            <BiCloudUpload />
                            {loadingSeed && <BarLoader color="#000000" loading={true} width={200} />}
                            {!loadingSeed && <div>Seed database</div>}
                        </button>

                        <button onClick={handleTruncate}>
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