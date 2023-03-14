import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import tokenSlice from './tokenSlice';
import statusSlice from './statusSlice';

export const  {saveFormData, emptyFormData} = formSlice.actions;
export const  {saveToken, deleteToken} = tokenSlice.actions;
export const  {saveStatus, deleteStatus} = statusSlice.actions;

const store = configureStore({
  reducer: {
    formSave: formSlice.reducer,
    tokenSave: tokenSlice.reducer,
    statusSave: statusSlice.reducer
  }
});

export default store;