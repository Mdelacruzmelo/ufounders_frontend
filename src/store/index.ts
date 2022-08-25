import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import clientsReducer from 'src/pages/Clients/slice'
import loginReducer from 'src/pages/Login/slice'
import { clientsApi } from 'src/pages/Clients/api'
import modalReducer from 'src/components/Modal/slice'

export const store = configureStore({
    reducer: {
        clients: clientsReducer,
        [clientsApi.reducerPath]: clientsApi.reducer,
        modal: modalReducer,
        login: loginReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(clientsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)