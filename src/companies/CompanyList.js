import { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";
import { Link } from "react-router-dom";
import "./CompanyList.css";

/** Displays list of companies
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 */

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  console.log("Rendering CompanyList...");

  /** Loads companies after initial render */

  useEffect(() => {
    async function getCompanies() {
      const companies = await JoblyApi.getCompanies();

      setCompanies(companies);
    }

    getCompanies();
  }, []);

  /** Takes search term and searches company */
  async function searchCompanies(searchTerm) {

    const companies = await JoblyApi.getCompanies({ nameLike: searchTerm });

    setCompanies(companies);
  }

  if (!companies) return <div>Loading...</div>;

  return (
    <div>
      <SearchForm handleSearch={searchCompanies} />

      {companies.length === 0 && <div>Sorry, no results were found!</div>}

      {companies.map(c =>
        <Link to={`/companies/${c.handle}`}>
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
