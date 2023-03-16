import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import tokenSlice from './tokenSlice';
import statusSlice from './statusSlice';
import dataUserSlice from './dataUserSlice';

export const  {saveFormData, emptyFormData} = formSlice.actions;
export const  {saveToken, deleteToken} = tokenSlice.actions;
export const  {saveStatus, deleteStatus} = statusSlice.actions;
export const  {saveUserData, deleteUserData} = dataUserSlice.actions;

const store = configureStore({
  reducer: {
    formSave: formSlice.reducer,
    tokenSave: tokenSlice.reducer,
    statusSave: statusSlice.reducer,
    dataUserSave: dataUserSlice.reducer
  }
});

export default store;