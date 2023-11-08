import { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";

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

  /** search company */
  function searchCompany(handle) {

    const companies = JoblyApi.getCompanies({ nameLike: handle });

    setCompanies(companies);

  }


  if (!companies) return <div>Loading...</div>;

  return (
    <div>
      <SearchForm handleSearch={searchCompany} />
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
