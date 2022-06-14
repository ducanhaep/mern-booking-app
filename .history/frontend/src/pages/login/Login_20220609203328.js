import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMyAuthContext } from "../../context/AuthContext";
import "./login.css";
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const navigate = useNavigate();

  const { loading, error, dispatch } = useMyAuthContext();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  return (
    <div className="login">
      <form className="lContainer" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} type="submit" className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </form>
    </div>
  );
};
export default Login;
