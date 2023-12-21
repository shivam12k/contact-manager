import { configureStore } from '@reduxjs/toolkit';
import { ContactSlice } from './slices/ContactSlice';

export const store = configureStore({
  reducer: {
    Contacts: ContactSlice.reducer, // Access the reducer property of ContactSlice
    // Other reducers can be added here if you have more slices
  }
});
