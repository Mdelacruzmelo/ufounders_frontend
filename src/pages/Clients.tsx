import { useState } from 'react'
import FadeIn from 'react-fade-in'
import { Header, Sidebar, Client } from 'src/components'
import { clients } from '../services/data'
import 'src/styles/pages/Clients.scss'

const Clients = () => {

    // TODO: PASAR A REDUX
    const [sidebarOpened, setSidebarOpened] = useState(false)
    const [activePage, setActivePage] = useState(1)

    return (
        <FadeIn>
            <div className='page'>
                <Sidebar
                    sidebarOpened={sidebarOpened}
                    activePage={activePage}
                    setSidebarOpened={setSidebarOpened}
                />
                <main className={`${sidebarOpened ? 'sidebar_opened' : ''} `}>
                    <Header />
                    <div className='clients_list'>
                        {clients.map((client, index) => {
                            return (
                                <Client client={client} key={index} />
                                
                            )
                        })}
                    </div>
                </main>
            </div>
        </FadeIn>
    )
}

export default Clients