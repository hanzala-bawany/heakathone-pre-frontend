import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount, nameChanger } from "../../reduxToolKit/authSlice"
import MidModal from '../../components/midModal/MidModal'
import { useFetch } from '../../utills/useFetch'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authStates = useSelector((state) => state.authSlice)
  console.log(authStates);

  const { data, error, loading } = useFetch(`/api/test/getTestData`)

  if(error == "Invalid User") {
    localStorage.removeItem("heakathoneLoginUser")
    navigate("/login")
    toast.error(error)
  } 

  console.log(data, "--> data");
  console.log(error, "-->error");
  console.log(loading, "-->loading");




  return (
    <div>
      Home

      < MidModal />

      <button onClick={() => dispatch(increment())}>Click me for age ++</button>
      <button onClick={() => dispatch(nameChanger("hanzala"))}>Click me for name change</button>
    </div>
  )
}

export default Home