import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDark: true
    },
    reducers: {
        changeToLight: (state) => {
            state.isDark = false
        },
        changeToDark: (state) => {
            state.isDark = true
        },
    }
});

export const { changeToDark, changeToLight } = themeSlice.actions;

export default themeSlice.reducer;