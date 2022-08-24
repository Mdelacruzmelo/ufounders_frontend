import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Client } from 'src/constants/types'
import { clients as dataClients } from 'src/services/data'
import type { RootState } from 'src/store'

interface ClientsState {
    list: Client[]
}

const initialState: ClientsState = {
    list: dataClients // TODO: This must come from backend
}

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setClients: (state, action: PayloadAction<Client[]>) => {
            state.list = action.payload
        }
    }
})

export const { setClients } = clientsSlice.actions

export const getClients = (state: RootState) => state.clients.list

export default clientsSlice.reducer