import { configureStore } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import { devToolsEnhancer } from '@redux-devtools/extension';



// const myReducer = createReducer()

const enhancer = devToolsEnhancer();


export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
}, enhancer);
