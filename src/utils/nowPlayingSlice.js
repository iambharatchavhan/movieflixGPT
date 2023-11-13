import {createSlice} from "@reduxjs/toolkit"

const nowPlayingMoviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovie:null,
        popularMovies:null,
        upcomingMovies:null,
        topMovies:null,
        movieTrailer : null,
        movieVideo:null,
        movieDetails:null,
    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovie = action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload;
        },
        addUpComingMovies : (state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addTopMovies : (state,action)=>{
            state.topMovies = action.payload;
        },
        addMovieTrailer : (state,action) =>{
            state.movieTrailer = action.payload;
        },
        addMovieVideo : (state,action) =>{
            state.movieVideo = action.payload;
        },
        addMovieDetails : (state,action) =>{
            state.movieDetails = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopMovies,addUpComingMovies,addMovieVideo,addMovieDetails} = nowPlayingMoviesSlice.actions;
export default nowPlayingMoviesSlice.reducer;