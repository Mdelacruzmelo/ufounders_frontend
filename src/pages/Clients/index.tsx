import { useEffect, useRef, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'src/hooks/redux'
import { toast, ToastOptions } from 'react-toastify';
import FadeIn from 'react-fade-in'

import { useGetClientsQuery } from './api'
import { Header, Sidebar, Client, Details, Modal } from 'src/components'
import { Client as ClientInterface } from 'src/constants/types';
import { setClients } from './slice';

import DataNotFound from './Components/DataNotFound';
import Loading from './Components/Loading'
import './Clients.scss'
import { alertOptions } from 'src/common'
import { useNavigate } from 'react-router-dom';

const Clients = () => {

    const navigate = useNavigate()
    const refDispatch = useAppDispatch()
    const dispatch = useRef(refDispatch) // useEffect dependency fix
    const { data, isLoading, error } = useGetClientsQuery(null)
    const { list } = useAppSelector((state) => state.clients)
    const [sidebarOpened, setSidebarOpened] = useState(false)

    const dataError = error as any

    useEffect(() => {

        if (data && data.length > 0) {

            dispatch.current(setClients(data))

        } else if (!data && !isLoading && dataError) {

            console.log('~ dataError', dataError)
            toast.error(dataError?.data?.message, {
                ...alertOptions,
                className: 'toast-alert error'
            })
            navigate('/login')
        }

    }, [data, dataError, isLoading, navigate])

    return (
        <>
            <FadeIn>

                <div className='page'>

                    <Sidebar
                        sidebarOpened={sidebarOpened}
                        activePage={1}
                        setSidebarOpened={setSidebarOpened}
                    />

                    <main className={`${sidebarOpened ? 'sidebar_opened' : ''} `}>

                        <Header />

                        {isLoading && <Loading />}

                        {!isLoading && list?.length === 0 && <DataNotFound />}

                        {!isLoading && list?.length > 0 && (

                            <div className='clients_list'>

                                {list?.map((client: ClientInterface, index: number) => (

                                    <Client client={client} key={index} />

                                ))}

                            </div>

                        )}

                    </main>

                </div>

            </FadeIn>

            <Modal><Details /></Modal>

        </>
    )
}

export default Clients