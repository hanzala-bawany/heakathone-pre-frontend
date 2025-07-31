import NavBar from '../../components/navbar/NavBar'
import styles from './Signup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSpinner, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { baseURL } from "../../utills/baseURL.js"


const Signup = () => {

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const [userInputs, setUserInputs] = useState({})

  const inputChangeHandler = (e) => {
    setUserInputs({ ...userInputs, [e.target.id]: e.target.value })
  }

  const loginBtnHandler = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const res = await axios.post( `${baseURL}/api/auth/signup`, userInputs )
      // console.log(res, "<-- res");
      toast.success(res?.data?.message)
      navigate("/login")
      setLoading(false)
    }
    catch (err) {
      toast.error(err?.response?.data?.message)
      // console.log(err, "err in signup call");
      setLoading(false)
    }

  }




  return (
    <div className={styles.loginPage}>

      <NavBar />

      <div className={styles.container}>
        <h2 className={styles.heading}>Let's Get Started</h2>
        <div className={styles.link} style={{ margin: "20px 0px" }}>Create an account</div>

        <form className={styles.form}>

          {/* Username */}
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Username"
              id='userName'
              className={styles.input}
              onChange={inputChangeHandler}
            />
          </div>

          {/* Father Name */}
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Father Name"
              id="fatherName"
              className={styles.input}
              onChange={inputChangeHandler}
            />
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              id="email"
              className={styles.input}
              onChange={inputChangeHandler}
            />
          </div>

          {/* age */}
          <div className={styles.inputGroup}>
            <input
              type="number"
              placeholder="Age"
              id='age'
              className={styles.input}
              onChange={inputChangeHandler}
            />
          </div>

          {/* Password */}
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              id='password'
              className={styles.input}
              onChange={inputChangeHandler}
            />
          </div>

          {/* Forgot and Join */}
          <div className={styles.linksRow}>
            <span href="#" className={styles.link}>Already have an account? <Link className={styles.joinNowBtnInForm} to="/login">Login</Link></span>
          </div>

          {/* Login Button */}
          <button onClick={loginBtnHandler} disabled={loading} className={styles.loginBtn}>
            {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Signup"}
          </button>

          {/* Google Signin */}
          <button className={styles.googleBtn}>
            Sign in with Google
            {/* <FontAwesomeIcon className={styles.icon} icon={faGoogle} /> */}
            <FontAwesomeIcon icon={faGoogle} beatFade style={{ color: "#ffc23d", marginLeft: "8px" }} />
          </button>   

        </form>
      </div>
    </div>
  );
};

export default Signup;