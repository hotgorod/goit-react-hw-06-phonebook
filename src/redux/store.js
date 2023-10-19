import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import contactReducer from './contactSlice';


const enhancer = devToolsEnhancer();


export default configureStore({
  reducer: {
    contacts: contactReducer,
  
  },
}, enhancer);


