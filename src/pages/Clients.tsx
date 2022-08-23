import { useState } from 'react'
import { Header, Sidebar, Client } from 'src/components'
import { clients } from '../services/data'
import 'src/styles/pages/Clients.scss'

const Clients = () => {

    const [openedSidebar, setOpenedSidebar] = useState()

    return (
        <div className='page'>
            <aside className={`${openedSidebar ? 'opened' : 'closed'}`}>
                <Sidebar setOpenedSidebar={setOpenedSidebar} />
            </aside>
            <main>
                <Header />
                <div className='clients_list'>
                    {clients.map((client, index) => {
                        return (<Client client={client} key={index} />)
                    })}
                </div>
            </main>
        </div>
    )
}

export default Clients