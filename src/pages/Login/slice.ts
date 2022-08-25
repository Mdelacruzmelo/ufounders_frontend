import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'src/constants/types'

interface LoginState {
    user?: User
}

const initialState: LoginState = {
    user: undefined
}

export const loginSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
    }
})

export const { setUser } = loginSlice.actions

export default loginSlice.reducer