import { configureStore } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';


const myReducer = createReducer()

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
