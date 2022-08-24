import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './contacts';

export const store = configureStore({
  reducer: {
    contacts: reducer.contactsReducer,
  },
});
