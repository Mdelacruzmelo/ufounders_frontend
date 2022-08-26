import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'src/constants/types'

interface LoginState {
    username: string,
    email: string
}

const initialState: LoginState = {
    username: "",
    email: ""
}

export const loginSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state = action.payload
        },
    }
})

export const { setUser } = loginSlice.actions

export default loginSlice.reducer