import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IInitialState {
    movies: {}[]
}

const initialState: IInitialState = {
    movies: []
}

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const response = await fetch('https://api.tvmaze.com/schedule/web?date=2020-05-29&country=US')
        return await response.json()
    }
)

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {

    },

    extraReducers: (builder)=> {
        builder.addCase(fetchMovies.fulfilled, (state, action)=> {
            state.movies = action.payload
        })
    }
})


export default moviesSlice.reducer
