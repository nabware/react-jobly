import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./companies/CompanyList";
import CompanyDetail from "./companies/CompanyDetail";
import JobList from "./jobs/JobList";
import PageNotFound from "./common/PageNotFound";
import LoginForm from "./user/LoginForm";
import SignupForm from "./user/SignupForm";
import ProfileForm from "./user/ProfileForm";
import { useContext } from "react";
import userContext from "./userContext";
import { Navigate } from "react-router-dom";

/**
 * Renders all routes and PageNotFound if page not found.
 *
 * Props:
 * - login: login function
 * - signup: signup function
 *
 * Context:
 * - user
 *
 * App -> RoutesList -> Routes
 */

function RoutesList({ login, signup, updateProfile }) {
  const { user } = useContext(userContext);

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/login" element={<LoginForm login={login} />} />
      <Route path="/signup" element={<SignupForm signup={signup} />} />
      <Route path="/profile" element={<ProfileForm updateProfile={updateProfile} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RoutesList;
