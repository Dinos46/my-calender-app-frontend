import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { eventService } from '../../services/eventService';

export const getAllEvents = createAsyncThunk(
    'events/getAllEvents',
    async () => {
        return await eventService.query()
    }
)

const eventSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        status: null
    },
    extraReducers: {
        [getAllEvents.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getAllEvents.fulfilled]: (state, { payload }) => {
            state.events = payload;
            state.status = 'success';
        },
        [getAllEvents.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
})

export default eventSlice.reducer
