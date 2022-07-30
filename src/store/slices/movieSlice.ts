import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface ITvShow {
    id: number,
    url: string,
    airDate: string,
    image: {
        original: string
    },
    rating: number,
    summary: string,
    name: string,
}

interface IInitialState {
    tvShows: ITvShow[]
    favorites: number[]
}

const initialState: IInitialState = {
    tvShows: [],
    favorites: [],
}

export const fetchTvShows = createAsyncThunk(
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
        addToFavorites: (state, action: PayloadAction<number[]>) => {
            state.favorites = action.payload
            console.log(action.payload)
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchTvShows.fulfilled, (state, action) => {
            state.tvShows = action.payload
        })
    }
})

export const {addToFavorites} = moviesSlice.actions

export default moviesSlice.reducer
