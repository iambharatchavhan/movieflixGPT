import {configureStore} from '@reduxjs/toolkit';
import userReducer from "./userSlice"
import movieReducer from "./nowPlayingSlice"
import gptToggleReducer from "./gptToggleSlice"
const appStore = configureStore({
    reducer :{
        user: userReducer,
        movies: movieReducer,
        gptToggle:gptToggleReducer
    },
});

export default appStore;


