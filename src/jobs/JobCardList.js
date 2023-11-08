import JobCard from "./JobCard";

/** Displays list of jobs
 *
 * Props:
 * - jobs: Possible array of jobs [{id, title, salary, equity, company}]
 *
 * {CompanyDetail, JobList} -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {
  console.log("Rendering JobList...");

  if (jobs.length === 0) return <div>There are no jobs.</div>;

  return (
    <div>
      {jobs.map(j =>
        <JobCard
          key={j.id}
          title={j.title}
          company={j.companyName}
          salary={j.salary}
          equity={j.equity}
        />
      )}
    </div>
  );
}

export default JobCardList;
