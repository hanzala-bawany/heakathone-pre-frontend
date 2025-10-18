import { useEffect } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const HomeParent = () => {
 
    const isUserLogin = JSON.parse(localStorage.getItem("heakathoneLoginUser"))

    useEffect(() => {
        if (!isUserLogin) toast.warning("You have to login first")
    }, [isUserLogin])

    return (
        <>
            {isUserLogin ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default HomeParent