import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount, nameChanger } from "../../reduxToolKit/authSlice"
import { useFetch } from '../../utills/useFetch'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../reduxToolKit/userSlice'

const Home = () => {

  const token = JSON.parse(localStorage.getItem("heakathoneLoginUser")) ;

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authStates = useSelector((state) => state.authSlice)
  // console.log(authStates);

  const { data, error, loading } = useFetch(`/api/test/getTestData?name=hanzala&age=19`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  })

  if (error == "Invalid User") {
    localStorage.removeItem("heakathoneLoginUser")
    navigate("/login")
    toast.error(error)
  }

  // console.log(data, "--> data");
  // console.log(error, "-->error");
  // console.log(loading, "-->loading");


  return (
    <div>
      Home
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  )
}

export default Home