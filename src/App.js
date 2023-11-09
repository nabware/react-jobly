import { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import userContext from "./userContext";
import JoblyApi from "./api";

/** Renders Navigation and RoutesList
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

  /** login */
  async function login(data) {
    try {
      const token = await JoblyApi.login(data);

      setToken(token);
      localStorage.setItem("token", token);

      return [];

    } catch (errors) {
      return errors;
    }
  }

  /** Signup */
  async function signup(data) {
    try {
      const token = await JoblyApi.signup(data);

      setToken(token);
      localStorage.setItem("token", token);

      return [];

    } catch (errors) {
      return errors;
    }
  }

  /** logout */
  function logout() {
    localStorage.clear();
    setToken(null);
    setUser(null);
  }

  useEffect(() => {
    JoblyApi.token = token;

    if (!token) return;

    async function getUser() {
      const payload = token.split(".")[1];
      const decodedPayload = atob(payload);
      const { username } = JSON.parse(decodedPayload);

      const user = await JoblyApi.getUser(username);

      setUser(user);
    }

    getUser();

  }, [token]);

  return (
    <userContext.Provider value={{ user, token }}>
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
