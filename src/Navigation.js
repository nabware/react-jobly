import { Link } from "react-router-dom";

/**
 * Renders links to routes
 *
 * App -> Navigation
 */

function Navigation() {
  return (
    <div>
      <Link to="/">Jobly</Link> |
      <Link to="/companies">Companies</Link> |
      <Link to="/jobs">Jobs</Link>
    </div>
  );
}

export default Navigation;
