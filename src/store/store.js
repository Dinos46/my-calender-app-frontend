import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './slices/eventSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
    reducer: {
        event: eventReducer,
        theme: themeReducer
    }
})
