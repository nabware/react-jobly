import { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";
import LoadingSpinner from "../common/LoadingSpinner";
import { Link } from "react-router-dom";
import "./CompanyList.css";
import { useContext } from "react";
import userContext from "../userContext";
import { Navigate } from "react-router-dom";

/** Displays list of companies based on search term.
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 */

function CompanyList() {
  const [companies, setCompanies] = useState(null);
  const { user } = useContext(userContext);

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
  if (!user) {
    return <Navigate replace to="/" />;
  }

  if (!companies) return <LoadingSpinner />;

  return (
    <div>
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
