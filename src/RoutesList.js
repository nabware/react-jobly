import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./companies/CompanyList";
import CompanyDetail from "./companies/CompanyDetail";
import JobList from "./jobs/JobList";
import PageNotFound from "./common/PageNotFound";
import LoginForm from "./user/LoginForm";
import SignupForm from "./user/SignupForm";
import ProfileForm from "./user/ProfileForm";

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
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/profile" element={<ProfileForm />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RoutesList;
