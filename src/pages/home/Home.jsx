import React from 'react'
import { useSelector , useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount , nameChanger } from "../../reduxToolKit/authSlice"
import MidModal from '../../components/midModal/MidModal'

const Home = () => {

  const dispatch = useDispatch()
  const authStates = useSelector((state) => state.authSlice)
  console.log(authStates);
  
  return (
    <div>
      Home

      < MidModal />

      <button onClick={ () => dispatch(increment()) }>Click me for age ++</button>
      <button onClick={ () => dispatch(nameChanger("hanzala")) }>Click me for name change</button>
    </div>
  )
}

export default Home