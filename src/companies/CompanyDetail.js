import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCardList from "../jobs/JobCardList";

/** Displays company details with jobs
 *
 * RoutesList -> CompanyDetail -> JobList
*/

function CompanyDetail() {
  const [company, setCompany] = useState(null);

  console.log("Rendering CompanyDetail...");

  const { handle } = useParams();

  /** Loads company after initial render */

  useEffect(() => {
    async function getCompany() {
      const company = await JoblyApi.getCompany(handle);

      setCompany(company);
    }

    getCompany();
  }, []);

  if (!company) return <div>Loading...</div>;

  return (
    <div>
      <div>{company.name}</div>
      <div>{company.description}</div>
      <div><JobCardList jobs={company.jobs} /></div>
    </div>
  );
}

export default CompanyDetail;
