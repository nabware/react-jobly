import { Link } from "react-router-dom";

/**
 * Renders links to routes
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
//TODO: add flow of components
