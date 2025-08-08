import React from 'react'
import { useSelector , useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount , nameChanger } from "../../reduxToolKit/authSlice"

const Home = () => {

  const dispatch = useDispatch()
  const authStates = useSelector((state) => state.authSlice)
  console.log(authStates);
  

  return (
    <div>
      Home

      <button onClick={ () => dispatch(increment()) }>Click me for age ++</button>
      <button onClick={ () => dispatch(nameChanger("hanzala")) }>Click me for name change</button>
    </div>
  )
}

export default Home