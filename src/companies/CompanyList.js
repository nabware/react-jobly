import { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";

/** Displays list of companies
 *
 * App -> RoutesList -> CompanyList
 */

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  console.log("Rendering CompanyList...");

  useEffect(() => {
    async function getCompanies() {
      const companies = await JoblyApi.getCompanies();

      setCompanies(companies);
    }

    getCompanies();
  }, []);

  if (!companies) return <div>Loading...</div>;

  return (
    <div>
      {companies.map(c =>
        <CompanyCard
          key={c.handle}
          name={c.name}
          description={c.description}
          logoUrl={c.logoUrl}
        />
      )
      }
    </div>);
}

export default CompanyList;