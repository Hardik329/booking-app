import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";


axios.defaults.baseURL='https://booking-app-z2m7.onrender.com/api'

const Login = ({ type }) => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    console.log(credentials);

    dispatch({ type: "LOGIN_START" });
    try {
      if (type === "login") {
        const res = await axios.post("/auth/login", credentials);
        console.log(res);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
        navigate("/");
      } else {
        const res = await axios.post("/auth/register", credentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
        navigate(-1);
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        {type === "register" && (
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={handleChange}
            className="lInput"
          />
        )}
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          {type === "login" ? "Login" : "Register"}
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
