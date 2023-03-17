import { createSlice } from '@reduxjs/toolkit';

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
      isActiveTurn: (state) => {state.isActive = !state.isActive;}
    }
  });
  
  
  export {dataUserSlice,isColorActiveSlice};