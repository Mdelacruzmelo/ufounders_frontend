import { useEffect, useRef, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'src/hooks/redux'
import FadeIn from 'react-fade-in'

import { useGetClientsQuery } from './api'
import { Header, Sidebar, Client, Details, Modal } from 'src/components'
import { Client as ClientInterface } from 'src/constants/types';
import { setClients } from './slice';

import DataNotFound from './Components/DataNotFound';
import Loading from './Components/Loading'
import './Clients.scss'


const Clients = () => {

    const refDispatch = useAppDispatch()
    const dispatch = useRef(refDispatch) // useEffect dependency fix
    const { data, isLoading } = useGetClientsQuery(null)
    const [sidebarOpened, setSidebarOpened] = useState(false)
    const { list } = useAppSelector((state) => state.clients)

    useEffect(() => {
        if (data && data.length > 0)
            dispatch.current(setClients(data))
    }, [data])

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
                        {!isLoading && list.length === 0 && <DataNotFound />}
                        {!isLoading && list.length > 0 && (
                            <div className='clients_list'>
                                {list.map((client: ClientInterface, index: number) => <Client client={client} key={index} />)}
                            </div>
                        )}
                    </main>
                </div>
            </FadeIn>

            <Modal visible={false}>
                <Details />
            </Modal>
        </>
    )
}

export default Clients