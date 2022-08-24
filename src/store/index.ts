import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import clientsReducer from 'src/pages/Clients/slice'
import { clientsApi } from 'src/pages/Clients/api'

export const store = configureStore({
    reducer: {
        clients: clientsReducer,
        [clientsApi.reducerPath]: clientsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(clientsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)