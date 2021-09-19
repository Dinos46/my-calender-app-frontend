import { createSlice } from "@reduxjs/toolkit";
import { eventReducer } from "../reducers/eventReducer";

const eventSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        status: null,
        selectedEv: null
    },
    reducers: {
        setSelectedEv: (state, { payload }) => {
            state.selectedEv = payload
        }
    },
    extraReducers: eventReducer
});

export const { setSelectedEv } = eventSlice.actions;
export default eventSlice.reducer;
