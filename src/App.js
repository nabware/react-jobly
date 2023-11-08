import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";

/**
 * Renders Navigation and RoutesList
 * App->
 */

function App() {
  return (
    <div className="App">
      <h1>Jobly</h1>
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
//TODO: add console to every component
//TODO: add flow of components
