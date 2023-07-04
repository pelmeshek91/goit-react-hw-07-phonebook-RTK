import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { contactsApi } from './contactsSliceApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
