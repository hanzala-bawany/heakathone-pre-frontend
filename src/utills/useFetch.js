import axios from "axios"
import { useEffect, useState } from "react"
import { baseURL } from "./baseURL"



export const useFetch = (route) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {
    const fetchData = async () => {

      const token = JSON.parse(localStorage.getItem("heakathoneLoginUser")) ;

      setLoading(true)
      try {
        const fetchData = await axios.get(`${baseURL}${route}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          }
        })
        // console.log(fetchData, "--> fetchData in useFetch");

        setData(fetchData.data)
        setLoading(false)
        
      }
      catch (error) {
        // console.log(error,"error")
        setError(error?.response?.data?.message)
        setLoading(false)
      }
    }
    fetchData()

  }, [])

  const reFetchData = async () => {
    setLoading(true)
    try {
      const fetchData = await axios.get(url, {
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      })
      setData(fetchData.data)
      setLoading(false)
    }
    catch (error) {
      // console.log(error,"<--- error");
      setError(error?.response?.data?.message)
      setLoading(false)
    }
  }

  return { data, loading, error, reFetchData }

}




// export const postReq = async (route, data) => {
//   try {
//     const res = await axios.post(`${baseURL}${route}`, data, { withCredentials: true })
//     console.log(res , "res");
//     return res
//   }
//   catch (err) {
//     console.log(err, "err in api call");
//     return err
//   }
// }





