import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
    name: 'statusSave',
    initialState: {
        status: null
      },
    reducers: {
      saveStatus: (state, action) => {state.status = action.payload;},
      deleteStatus:(state) =>{state.status =  null}
    }
  });
  
  export default statusSlice;