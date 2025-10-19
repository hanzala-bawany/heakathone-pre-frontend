import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {logoutUser} from "../reduxToolKit/userSlice.js"
import navImg from "../assets/aiImg.png"
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"

const AppLayout = ({ children }) => {

  const { isUserLogin } = useSelector((stats) => stats.userSlice)
  console.log(isUserLogin);
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () =>{
    dispatch(logoutUser())
    navigate("/login")
    toast.success("User Logout Successfully")
  }

  return (
    <div className="h-[100vh] w-[100%]">

      <nav className="w-[100%] h-[60px] border flex justify-around items-center border-gray-400 ">
        <img className="w-[40px] rounded-[100%]" src={navImg} alt="" />
        <h1 className="text-[25px] font-bold"> Health Mate AI Tool</h1>
        {
          isUserLogin ?
            <button onClick={logoutHandler} className="px-2 py-1 rounded-md text-[#e2e8f0] bg-gradient-to-r from-[#3b82f6] to-[#38bdf8] shadow-[0_0_8px_rgba(59,130,246,0.5)] hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] cursor-pointer hover:-translate-y-0.5 transition-all duration-300">Logout</button>
            : <div className="flex gap-4">
              <Link to="/signup">
                <button className="px-2 py-1 cursor-pointer rounded-md text-[#e2e8f0] bg-gradient-to-r from-[#3b82f6] to-[#38bdf8] shadow-[0_0_8px_rgba(59,130,246,0.5)] hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] hover:-translate-y-0.5 transition-all duration-300">
                  Signup
                </button>
              </Link>

              <Link to="/login">
                <button className="px-2 py-1 cursor-pointer rounded-md border border-[#38bdf8] text-[#38bdf8] bg-transparent hover:bg-[#1e293b] hover:shadow-[0_0_10px_rgba(56,189,248,0.6)] transition-all duration-300">
                  Login
                </button>
              </Link>
            </div>
        }
      </nav>

      <div className="w-[100%] h-[calc(100vh-60px)] overflow-y-auto">
        {children}
      </div>

    </div>
  )
}

export default AppLayout