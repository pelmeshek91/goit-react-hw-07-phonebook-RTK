import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const contactsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { actions } = contactsSlice;

export default contactsSlice.reducer;
