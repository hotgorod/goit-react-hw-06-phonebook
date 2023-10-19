import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    
    addContact(state, action) {
      console.log(state);
      console.log(action);
    state.contacts.push({key: nanoid(),
    contactName: action.payload.contactName,
    contactNumber: action.payload.contactNumber,})
    },
    deleteContact(state, action) {},
    changeFilter(state, action) {},
  },
});

export const { addContact, deleteContact, changeFilter } =
  contactSlice.actions;
export default contactSlice.reducer;