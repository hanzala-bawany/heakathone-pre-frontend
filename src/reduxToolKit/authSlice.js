import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "hanzala bawany",
  age: 19,
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    increment: (state) => {
      state.age += 1
    },
    decrement: (state) => {
      state.age -= 1
    },
    incrementByAmount: (state, action) => {
      state.age += action.payload
    },
    nameChanger: (state, action) => {
      console.log(action, "action <<<<<<<<<");
      state.name = action.payload
    }
  },
})


export const { increment, decrement, incrementByAmount, nameChanger } = authSlice.actions

export default authSlice.reducer