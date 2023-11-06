import { createSlice } from "@reduxjs/toolkit";

const gptToggle = createSlice({
    name: "gptToggle",
    initialState:{
        btnGptToggle: false,
    },
    
    reducers:{
        gptToggleButton : (state)=>{
          state.gptToggle = !state.gptToggle
        }
    }
})

export const {gptToggleButton} = gptToggle.actions
export default gptToggle.reducer