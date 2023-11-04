import {createSlice} from "@reduxjs/toolkit"

const nowPlayingMoviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovie:null,
        movieTrailer : null,
    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovie = action.payload;
        },
        addMovieTrailer : (state,action) =>{
            state.movieTrailer = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addMovieTrailer} = nowPlayingMoviesSlice.actions;
export default nowPlayingMoviesSlice.reducer;