import {
    getAllEvents,
    addEvent,
    editEvent,
    removeEvent
} from "../thunks/eventThunk";

export const eventReducer = {
    [getAllEvents.pending]: (state) => {
        state.status = 'loading';
    },
    [getAllEvents.fulfilled]: (state, { payload }) => {
        state.events = payload;
        state.status = 'success';
    },
    [getAllEvents.rejected]: (state) => {
        state.status = 'failed';
    },
    [addEvent.pending]: (state) => {
        state.status = 'loading';
    },
    [addEvent.fulfilled]: (state, { payload }) => {
        state.events.push(payload)
        state.status = 'success';
    },
    [addEvent.rejected]: (state) => {
        state.status = 'failed';
    },
    [removeEvent.pending]: (state) => {
        state.status = 'loading';
    },
    [removeEvent.fulfilled]: (state, { payload }) => {
        const filtered = state.events.filter(ev => payload !== ev._id);
        state.events = [...filtered];
        state.status = 'success';
    },
    [removeEvent.rejected]: (state) => {
        state.status = 'failed';
    },
    [editEvent.pending]: (state) => {
        state.status = 'loading';
    },
    [editEvent.fulfilled]: (state, { payload }) => {
        const idx = state.events.findIndex(ev => payload.data?._id === ev._id);
        state.events.splice(idx, 1, payload.data);
        state.status = 'success';
    },
    [editEvent.rejected]: (state) => {
        state.status = 'failed';
    },
}