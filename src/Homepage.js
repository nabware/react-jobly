import { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";

/** Displays homepage
 *
 * App -> RoutesList -> Homepage
*/

function Homepage() {
  const { user } = useContext(userContext);

  console.log("Rendering Homepage...");

  return (
    <div className="container homepage">
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        {
          user
            ? <b>Welcome Back, {user.firstName}!</b>
            : <div>
              <Link className="btn btn-primary m-2" to="/login">Login</Link>
              <Link className="btn btn-primary" to="/signup">Signup</Link>
            </div>
        }
    </div>
  );
}

export default Homepage;
