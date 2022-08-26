import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Client, ClientDetails } from 'src/constants/types'

interface ClientsState {
    list: Client[]
    clientDetails?: ClientDetails,
    total: number
}

const initialState: ClientsState = {
    list: [],
    clientDetails: undefined,
    total: 0
}

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setClients: (state, action: PayloadAction<any>) => {
            state.list = action.payload.list
            state.total = action.payload.total
        },
        setClientDetails: (state, action: PayloadAction<ClientDetails>) => {
            state.clientDetails = action.payload
        }
    }
})

export const { setClients, setClientDetails } = clientsSlice.actions

export default clientsSlice.reducer