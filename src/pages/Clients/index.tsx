import { useState } from 'react'
import FadeIn from 'react-fade-in'
import { useAppSelector } from 'src/hooks/redux'
import BarLoader from 'react-spinners/BarLoader'
import { FaRegFolderOpen } from "react-icons/fa";
import { Header, Sidebar, Client, Details, Modal } from 'src/components'
import './Clients.scss'
import { useGetClientsQuery } from './api'

const Clients = () => {

    // TODO: PASAR A REDUX
    const { data, isLoading } = useGetClientsQuery(null)
    const [sidebarOpened, setSidebarOpened] = useState(false)
    const [activePage, setActivePage] = useState(1)
    const { list } = useAppSelector((state) => state.clients)

    const Result = () => {

        if (isLoading) {
            return (
                <div className="centered">
                    <BarLoader color="#000000" loading={true} width={200} />
                </div>
            )
        }
        if (!isLoading && !data) {
            return (
                <div className="centered">
                    <h1>
                        <FaRegFolderOpen />
                    </h1>
                    <div>
                        Data not found
                    </div>
                </div>
            )
        }

        return (
            <>
                {list.map((client, index) => <Client client={client} key={index} />)}
            </>
        )

    }

    return (
        <>
            <FadeIn>
                <div className='page'>
                    <Sidebar
                        setActivePage={setActivePage}
                        sidebarOpened={sidebarOpened}
                        activePage={activePage}
                        setSidebarOpened={setSidebarOpened}
                    />
                    <main className={`${sidebarOpened ? 'sidebar_opened' : ''} `}>
                        <Header />
                        <div className='clients_list'>
                            <Result />
                        </div>
                    </main>
                </div>
            </FadeIn>

            {/* TODO: This visible must com from redux */}
            <Modal visible={false}>
                <Details />
            </Modal>
        </>
    )
}

export default Clients