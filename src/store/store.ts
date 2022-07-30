import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './slices/movieSlice'

export const store = configureStore({
    reducer: {
        moviesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
