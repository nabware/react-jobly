import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";

/**
 * Renders links to routes
 *
 * App -> Navigation
 */

function Navigation() {
  const { user, token } = useContext(userContext);

  if (!token) {
    return (
      <div>
        <Link to="/">Jobly</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/">Jobly</Link> |
      <Link to="/companies">Companies</Link> |
      <Link to="/jobs">Jobs</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Navigation;
