import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Client } from 'src/constants/types'

interface ClientsState {
    list: Client[]
}

const initialState: ClientsState = {
    list: [] // TODO: This must come from backend
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

export default clientsSlice.reducer