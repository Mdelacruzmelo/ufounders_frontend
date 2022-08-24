import { useState } from 'react'
import FadeIn from 'react-fade-in'
import { useAppSelector } from 'src/hooks/redux'
import { Header, Sidebar, Client, Details, Modal } from 'src/components'
import './Clients.scss'

const Clients = () => {

    // TODO: PASAR A REDUX
    const [sidebarOpened, setSidebarOpened] = useState(false)
    const [activePage, setActivePage] = useState(1)

    const { list } = useAppSelector((state) => state.clients)

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
                            {list.map((client, index) => <Client client={client} key={index} />)}
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