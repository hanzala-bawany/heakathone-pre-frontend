import NavBar from '../../components/navbar/NavBar'
import styles from './login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faL, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { baseURL } from "../../utills/baseURL.js"


const Login = () => {

  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


  const loginBtnHandler = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const res = await axios.post( `${baseURL}/api/auth/login`, {email , password} )
      console.log(res, "<-- res");
      toast.success(res?.data?.message)
      localStorage.setItem("heakathoneLoginUser",JSON.stringify(res?.data?.data))
      navigate("/")
      setLoading(false)
    }
    catch (err) {
      toast.error(err?.response?.data?.message)
      console.log(err, "err in signup call");
      setLoading(false)
    }

  }




  return (
    <div className={styles.loginPage}>

      <NavBar />

      <div className={styles.container}>
        <h2 className={styles.heading}>Welcome Back</h2>

        <form className={styles.form}>
          {/* Username */}
          <div className={styles.inputGroup}>
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
            <input
              type="text"
              placeholder="Username"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className={styles.inputGroup}>
            <FontAwesomeIcon className={styles.icon} icon={faLock} />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Forgot and Join */}
          <div className={styles.linksRow}>
            <Link to="/" className={styles.forgotPass}>Forgot Password?</Link>
            <span href="#" className={styles.link}>Don't have an account? <Link className={styles.joinNowBtnInForm} to="/signUp">Join now</Link></span>
          </div>

          {/* Login Button */}
          <button onClick={loginBtnHandler} disabled={loading} className={styles.loginBtn}>
            {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Login"}
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

export default Login;
