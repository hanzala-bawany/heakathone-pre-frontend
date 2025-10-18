import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserLogin :  JSON.parse(localStorage.getItem("heakathoneLoginUser")) || null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser : (state , action) =>{
      console.log(state , "state");
      console.log(action , "action");
      state.isUserLogin = action.payload;
    },
    logoutUser: (state) => {
      state.isUserLogin = null;
      localStorage.removeItem('heakathoneLoginUser');
    },
  },
})


export const { loginUser , logoutUser } = userSlice.actions

export default userSlice.reducer