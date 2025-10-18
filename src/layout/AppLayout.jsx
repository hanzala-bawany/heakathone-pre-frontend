import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

const AppLayout = ({ children }) => {

  const { isUserLogin } = useSelector((stats) => stats.userSlice)
  // console.log(isUserLogin);


  return (
    <div className="h-[100vh] w-[100%] ">
      <nav className="w-[100%] h-[50px] border border-gray-400 ">
        Navbar
      </nav>

      {
        isUserLogin ?
          <div className="w-[100%]  h-[calc(100vh-100px)] overflow-y-auto">
            {children}
          </div>
          :
          <div className="w-[100%]  h-[calc(100vh-50px)] overflow-y-auto">
            {children}
          </div>
      }

      {
        isUserLogin &&
        <footer className="h-[50px] bg-orange-100">
          Footer
        </footer>
      }

    </div>
  )
}

export default AppLayout