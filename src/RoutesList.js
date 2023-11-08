import { Routes, Route } from "react-router-dom";

/**
 * Renders all routes
 */

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/companies" element={<div>Companies</div>} />
      <Route path="/companies/:handle" element={<div>company</div>} />
      <Route path="/jobs" element={<div>Jobs</div>} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

export default RoutesList;
//TODO: add flow of components
//TODO: add components files and placeholders in there(inlcuding not found)
