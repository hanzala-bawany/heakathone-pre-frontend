import { configureStore } from '@reduxjs/toolkit'
import  authReducer  from './authSlice.js'
import  userReducer  from './userSlice.js'

export const store = configureStore({
  reducer: {
    authSlice : authReducer,
    userSlice : userReducer
  },
})