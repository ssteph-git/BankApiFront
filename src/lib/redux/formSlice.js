import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'formSave',
    initialState: {
      formData: {email: "", password:""}
    },
    reducers: {
      saveFormData: (state, action) => {state.formData = action.payload;},
      emptyFormData:(state, action) =>{state.formData =  {email: "", password:""}}
    }
  });
  
  export default formSlice;