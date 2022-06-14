import { Link } from "react-router-dom";
import { useMyAuthContext } from "../../context/AuthContext";
import "./navbar.css";
const Navbar = () => {
  const { user } = useMyAuthContext();
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">booking</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <Link to="/login">Login</Link>
            {/* <button className="navButton">Register</button> */}
            {/* <button className="navButton">Login</button> */}
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
