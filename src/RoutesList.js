import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./companies/CompanyList";
import CompanyDetail from "./companies/CompanyDetail";
import JobList from "./jobs/JobList";
import PageNotFound from "./common/PageNotFound";

/**
 * Renders all routes and PageNotFound if page not found.
 *
 *
 * App -> RoutesList -> Routes
 */

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RoutesList;
