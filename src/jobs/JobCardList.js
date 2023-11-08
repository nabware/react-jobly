import JobCard from "./JobCard";

/** Displays list of jobs
 *
 * Props:
 * - jobs: Possible array of jobs [{id, title, salary, equity}]
 *
 * RoutesList -> JobList -> JobCard
 */


function JobCardList({ jobs }) {
  console.log("Rendering JobList...");


  if (jobs.length === 0) return <div>There are no jobs.</div>;
  console.log(jobs);


  return (
    <div>
      {jobs.map(j => <JobCard title={j.title} company={j.companyName} salary={j.salary} equity={j.equity} />)}
    </div>
  );
}

export default JobCardList;
