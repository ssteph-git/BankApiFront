import { createSlice } from '@reduxjs/toolkit';

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
  
  export default tokenSlice;