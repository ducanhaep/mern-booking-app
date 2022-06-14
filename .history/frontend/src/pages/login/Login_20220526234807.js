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

  const handleChange = (e) => {};

  const handleLoginBtnClick = () => {};

  return (
    <div className="login">
      <div className="lContainer">
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
        <button
          disabled={loading}
          onClick={handleLoginBtnClick}
          className="lButton"
        >
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};
export default Login;
