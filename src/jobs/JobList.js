import { useState, useEffect } from "react";
import JoblyApi from "../api";
import SearchForm from "../common/SearchForm";
import JobCardList from "./JobCardList";

/** Displays list of jobs
 *
 * RouteList -> JobList -> {SearchForm, JobCardList}
 */

function JobList() {
  const [jobs, setJobs] = useState(null);

  console.log("Rendering JobList...");

  /** Loads jobs after initial render */

  useEffect(() => {
    async function getJobs() {
      const jobs = await JoblyApi.getJobs();

      setJobs(jobs);
    }

    getJobs();
  }, []);

  /** Takes search term and searches jobs */
  async function searchJobs(searchTerm) {

    const jobs = await JoblyApi.getJobs({ title: searchTerm });

    setJobs(jobs);
  }

  if (!jobs) return <div>Loading...</div>;

  return (
    <div>
      <SearchForm handleSearch={searchJobs} />

      <JobCardList jobs={jobs} />
    </div>
  );
}

export default JobList;