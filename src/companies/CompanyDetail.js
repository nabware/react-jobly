import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCardList from "../jobs/JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";
import PageNotFound from "../common/PageNotFound";

/** Displays company details with jobs
 *
 * State:
 * - company: {handle, name, description, jobs}
 * - errors: ["", ...]
 *
 *
 * RoutesList -> CompanyDetail -> JobList
*/

function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const [errors, setErrors] = useState([]);

  console.log("Rendering CompanyDetail...");

  const { handle } = useParams();

  /** Loads company after initial render */

  useEffect(() => {
    async function getCompany() {
      let company;

      try {
        company = await JoblyApi.getCompany(handle);

      } catch (errors) {
        setErrors(errors);
      }

      setCompany(company);
    }

    getCompany();
  }, []);

  if (errors.length > 0) return <PageNotFound />;

  if (!company) return <LoadingSpinner />;

  return (
    <div className="container header-card">
      <div className="text-start mb-2 p-2">
        <div className="title">{company.name}</div>
        <div>{company.description}</div>
      </div>
      <div><JobCardList jobs={company.jobs} /></div>
    </div>
  );
}

export default CompanyDetail;
