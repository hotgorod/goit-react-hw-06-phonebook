import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
      contacts: [],
      filter: '',
  },
  reducers: {
    addContact(state, action) {},
    deleteContact(state, action) {},
    getFilteredContacts(state, action) {},
    changeFilter(state, action) {},
  },
});

export const { addContact, deleteContact, getFilteredContacts, changeFilter } = contactSlice.actions;
export default contactSlice.reducer;