import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';

export const  {saveFormData, emptyFormData} = formSlice.actions;

const store = configureStore({
  reducer: {
    formSave: formSlice.reducer
  }
});

export default store;