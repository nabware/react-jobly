import { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";
import LoadingSpinner from "../common/LoadingSpinner";
import { Link } from "react-router-dom";

/** Displays list of companies based on search term.
 *
 * State:
 * - companies: [{handle, name, description, logoUrl}]
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 */

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  console.log("Rendering CompanyList...");

  /** Loads companies after initial render */

  useEffect(() => {
    searchCompanies();
  }, []);

  /** Takes search term and searches company */
  async function searchCompanies(searchTerm = "") {

    const companies = await JoblyApi.getCompanies({ nameLike: searchTerm });

    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;

  return (
    <div className="container">
      <SearchForm handleSearch={searchCompanies} />

      {companies.length === 0 && <div>Sorry, no results were found!</div>}

      {companies.map(c =>
        <Link key={c.handle} to={`/companies/${c.handle}`}>
          <CompanyCard
            key={c.handle}
            name={c.name}
            description={c.description}
            logoUrl={c.logoUrl}
          />
        </Link>
      )
      }
    </div>);
}

export default CompanyList;
