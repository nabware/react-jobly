import { useState } from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import userContext from "./userContext";

/** Renders Navigation and RoutesList
 *
 * State:
 * - user: {}
 * - token: ""
 *
 * App -> {Navigation, RoutesList}
 */

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, token }}>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <RoutesList />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
