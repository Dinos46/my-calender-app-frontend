import { createAsyncThunk } from "@reduxjs/toolkit"
import { eventService } from "../../services/eventService"

export const getAllEvents = createAsyncThunk(
    'events/getAllEvents',
    async () => {
        try {
            return await eventService.query();
        } catch (err) {
            throw new Error('cant get events', err);
        };
    }
);

export const addEvent = createAsyncThunk(
    'events/addEvent',
    async (ev) => {
        try {
            return await eventService.save(ev);
        } catch (err) {
            console.log('cant add event', err);
        };
    }
);

export const editEvent = createAsyncThunk(
    'events/editEvent',
    async (ev) => {
        try {
            return await eventService.save(ev);
        } catch (err) {
            console.log('cant edit event', err);
        };
    }
);

export const removeEvent = createAsyncThunk(
    'events/removeEvent',
    async (evId) => {
        try {
            return eventService.remove(evId);
        } catch (err) {
            console.log('cant remove event', err);
        };
    }
);