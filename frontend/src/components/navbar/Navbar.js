import { Link } from "react-router-dom";
import { useMyAuthContext } from "../../context/AuthContext";
import "./navbar.css";
const Navbar = () => {
  const { user, dispatch } = useMyAuthContext();
  const handleLogout = () => {};
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">booking</span>
        </Link>
        {user ? (
          <div>
            {user.username}
            <button
              className="navButton"
              onClick={() => {
                dispatch({ type: "LOGOUT" });
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="" className="navButton">
              Register
            </Link>
            <Link to="/login" className="navButton">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
