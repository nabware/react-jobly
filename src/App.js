import { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import userContext from "./userContext";
import JoblyApi from "./api";
import { jwtDecode } from "jwt-decode";
import LoadingSpinner from "./common/LoadingSpinner";

/** Renders Navigation and RoutesList and handles login, signup, and logout.
 *
 * State:
 * - user: {}
 * - token: ""
 * - hasLoaded: true/false
 *
 * App -> {Navigation, RoutesList}
 */

function App() {
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken);
  const [user, setUser] = useState(null);

  useEffect(() => {
    JoblyApi.token = token;

    if (!token) {
      localStorage.clear();
      setUser(null);

      return;
    };

    localStorage.setItem("token", token);

    /** Gets username from token, gets user object, and sets user. */

    async function getUser() {
      const decoded = jwtDecode(token);
      const { username } = decoded;

      try {
        const user = await JoblyApi.getUser(username);

        setUser({ ...user, applications: new Set(user.applications) });

      } catch (errors) {
        setToken(null);
      }
    }

    getUser();

  }, [token]);

  /** Takes login form data and sets token */

  async function login(data) {
    const token = await JoblyApi.login(data);

    setToken(token);
  }

  /** Takes signup form data and sets token */

  async function signup(data) {
    const token = await JoblyApi.signup(data);

    setToken(token);
  }

  /** Clears token and user. */

  function logout() {
    setToken(null);
  }

  /** Takes profile form data and sets user */
  async function updateProfile(username, data) {
    const updatedUser = await JoblyApi.updateProfile(username, data);

    setUser(currUser => ({ ...currUser, ...updatedUser }));
  }

  /** Takes username and jobId and applys to job */
  async function applyToJob(username, jobId) {
    const appliedJobId = await JoblyApi.applyToJob(username, jobId);

    setUser(currUser => ({
      ...currUser,
      applications: new Set([...currUser.applications, appliedJobId])
    }));
  }

  if (token && !user) return <LoadingSpinner />;

  return (
    <userContext.Provider value={{ user, applyToJob }}>
      <div className="App">
        <BrowserRouter>
          <Navigation logout={logout} />
          <RoutesList login={login} signup={signup} updateProfile={updateProfile} />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
