import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark"
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        lightTheme: (state, action) => {
            state.mode = "light"
        },
        darkTheme: (state, action) => {
            state.mode = "dark"
        }
    }
});

export const { lightTheme, darkTheme } = themeSlice.actions;

export default themeSlice.reducer;