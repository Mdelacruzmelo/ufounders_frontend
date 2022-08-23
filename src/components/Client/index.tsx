import React from 'react'
import { Client } from 'src/constants/types'

export interface Props {
    client: Client
}

const ClientComponent = ({ client }: Props) => {
    return (
        <div>
            <div>{client.firstName}{client.lastName}</div>
            <div>
                <label>ID</label>
                <span>{client._id}</span>
            </div>
            <div>
                <label>Nº de ticket</label>
                <span>{client.ticket}</span>
            </div>
        </div>
    )
}

export default ClientComponent