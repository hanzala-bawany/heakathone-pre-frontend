import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const navigate = useNavigate()
const baseURL = `http://localhost:8000`

export const useFetch = (route) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {

    const fetchData = async () => {

      setLoading(true)
      try {
        const fetchData = await axios.get(`${baseURL}${route}`, { withCredentials: true })
        console.log(fetchData, "fetchData in useFetch");

        setData(fetchData.data)
        setLoading(false)
        // localStorage.removeItem("loginUser")
      }
      catch (error) {
        setError(error?.message)
        setLoading(false)
      }
    }
    fetchData()

  }, [])

  const reFetchData = async () => {
    setLoading(true)
    try {
      const fetchData = await axios.get(url, { withCredentials: true })
      setData(fetchData.data)
      setLoading(false)
    }
    catch (error) {
      setError(error?.message)
      setLoading(false)
    }
  }

  return { data, loading, error, reFetchData }

}


export const postReq = async (route, data) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  try {
    setLoading(true)
    const res = await axios.post(`${baseURL}${route}`, data, {
      withCredentials: true
    })
    console.log(res, "login user res in login.jsx");
    //  dispatch({ type: "login_success", payLoad: res?.data?.data?.loginUser?._doc })
    navigate("/")
    toast.success('Login Successful!');
    setLoading(false)
  }
  catch (err) {
    // dispatch({ type: "login_failure", payLoad: err?.message })
    toast.error(err?.message);
    setError(err?.message)
    console.log(err);
    setLoading(false)
  }

  return { error, loading, data }
}



// practice


export const getRequest = async (route) => {
  const config = {
    url: URL + route,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  };
  try {
    const res = await axios.request(config);
    return res.data
  } catch (err) {
    return err.response.data;
  }
};

export const postRequest = async (route, data) => {
  const config = {
    url: URL + route,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  try {
    const res = await axios.request(config);
    return res.data
  } catch (err) {
    return err.response.data
  }
};

export const MultiPostRequest = async (route, data) => {
  try {
    const res = await axios.post(`${URL}${route}`, data, {
      headers: {
        // ❌ DON'T set Content-Type manually, let Axios handle it for FormData
      },
    });
    return res.data;
  } catch (err) {
    console.error("MultiPostRequest Error: ", err);
    return err.response?.data || { error: "Unknown error" };
  }
};

export const updateRequest = async (route, data) => {
  const config = {
    url: URL + route,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  try {
    const res = await axios.request(config);
    return res.data
  } catch (err) {
    return err.response.data
  }
};

