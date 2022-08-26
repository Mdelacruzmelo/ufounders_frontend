import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Client, ClientDetails } from 'src/constants/types'

interface ClientsState {
    list: Client[]
    clientDetails?: ClientDetails
}

const initialState: ClientsState = {
    list: [],
    clientDetails: undefined
}

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setClients: (state, action: PayloadAction<Client[]>) => {
            state.list = action.payload
        },
        setClientDetails: (state, action: PayloadAction<ClientDetails>) => {
            state.clientDetails = action.payload
        }
    }
})

export const { setClients, setClientDetails } = clientsSlice.actions

export default clientsSlice.reducer