import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'tokenSave',
  initialState: {
      token: null 
    },
  reducers: {
    saveToken: (state, action) => {state.token = action.payload;},
    deleteToken:(state) =>{state.token =  null}
  }
});

const dataUserSlice = createSlice({
    name: 'dataUserSave',
    initialState: {
      userData: {email: "", firstName:"", lastName:""}
    },
    reducers: {
      saveUserData: (state, action) => {state.userData = action.payload;},
      deleteUserData:(state) =>{state.userData =  {email: "", firstName:"", lastName:""}}
    }
  });

  const isColorActiveSlice = createSlice({
    name: 'turnIsActive',
    initialState: {
        isActive: false 
      },
    reducers: {
      isActiveTurn: (state) => {state.isActive = !state.isActive;},
      isActiveFalse: (state) => {state.isActive = false;}
    }
  });

  export const  {saveToken, deleteToken} = tokenSlice.actions;
export const  {saveUserData, deleteUserData} = dataUserSlice.actions;
export const  {isActiveTurn, isActiveFalse} = isColorActiveSlice.actions;

const store = configureStore({
  reducer: {
    tokenSave: tokenSlice.reducer,
    dataUserSave: dataUserSlice.reducer,
    turnIsActive: isColorActiveSlice.reducer,
    isActiveFalse: isColorActiveSlice.reducer
  }
});
  
  
  export {dataUserSlice,isColorActiveSlice,tokenSlice,store};