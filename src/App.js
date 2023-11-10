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
 *
 * App -> {Navigation, RoutesList}
 */

function App() {
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken);
  const [user, setUser] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(!Boolean(token));

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

        setUser(user);

      } catch (errors) {
        setToken(null);
      }
      setHasLoaded(true);
    }

    getUser();

  }, [token]);

  /** Takes login form data, sets token, and returns array of errors. */

  async function login(data) {
    const token = await JoblyApi.login(data);

    setToken(token);
  }

  /** Takes signup form data, sets token, and returns array of errors. */

  async function signup(data) {
    const token = await JoblyApi.signup(data);

    setToken(token);
  }

  /** Clears token and user. */

  function logout() {
    setToken(null);
  }

  if (!hasLoaded) return <LoadingSpinner />;

  return (
    <userContext.Provider value={{ user }}>
      <div className="App">
        <BrowserRouter>
          <Navigation logout={logout} />
          <RoutesList login={login} signup={signup} />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
