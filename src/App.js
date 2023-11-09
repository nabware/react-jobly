import { useState } from "react";
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
  async function login({ username, password }) {
    try {
      const token = await JoblyApi.login(username, password);

      setToken(token);
      localStorage.setItem("token", token);

      return [];

    } catch (error) {
      return [error];
    }
  }

  /** logout */
  function logout() {
    localStorage.clear();
    setToken(null);
    setUser(null);
  }

  return (
    <userContext.Provider value={{ user, token }}>
      <div className="App">
        <BrowserRouter>
          <Navigation logout={logout} />
          <RoutesList login={login} />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
