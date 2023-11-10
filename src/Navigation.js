import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
        <Link to="/">Jobly</Link>
        <div className="navbar-right">
          <Link to="/login" className="navbar-right-item">Login</Link>
          <Link to="/signup" className="navbar-right-item">Signup</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar">
      <Link to="/">Jobly</Link>
      <div className="navbar-right">
        <Link to="/companies" className="navbar-right-item">Companies</Link>
        <Link to="/jobs" className="navbar-right-item">Jobs</Link>
        <Link to="/profile" className="navbar-right-item">Profile</Link>
        <Link onClick={logout} className="navbar-right-item">Log out {user.username}</Link>
      </div>
    </div>
  );
}

export default Navigation;
