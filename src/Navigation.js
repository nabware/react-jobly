import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";


/**
 * Renders links to routes for anon and logged in users
 *
 * Props:
 * - logout: logout function
 *
 * Context:
 * - user
 *
 * App -> Navigation
 */

function Navigation({ logout }) {
  const { user } = useContext(userContext);

  if (!user) {
    return (
      <div className="navbar">
        <NavLink to="/">Jobly</NavLink>
        <div className="navbar-right">
          <NavLink to="/login" className="navbar-right-item">Login</NavLink>
          <NavLink to="/signup" className="navbar-right-item">Signup</NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar">
      <NavLink to="/">Jobly</NavLink>
      <div className="navbar-right">
        <NavLink to="/companies" className="navbar-right-item">Companies</NavLink>
        <NavLink to="/jobs" className="navbar-right-item">Jobs</NavLink>
        <NavLink to="/profile" className="navbar-right-item">Profile</NavLink>
        <Link to="/" onClick={logout} className="navbar-right-item">Log out {user.username}</Link>
      </div>
    </div>
  );
}

export default Navigation;
