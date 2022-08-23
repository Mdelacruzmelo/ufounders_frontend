import { useState } from 'react'
import { Header, Sidebar, Client } from 'src/components'
import { clients } from '../services/data'
import 'src/styles/pages/Clients.scss'

const Clients = () => {

    return (
        <div className='page'>
            
                <Sidebar />
           
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