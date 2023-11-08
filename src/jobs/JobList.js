/** Displays list of jobs
 *
 * Props:
 * - jobs: Possible array of jobs [{id, title, salary, equity}]
 *
 * RoutesList -> JobList -> JobCard
 */


function JobList({ jobs }) {
  console.log("Rendering JobList...");

  if (jobs.length === 0) return <div>There are no jobs.</div>;

  return (
    <div>
      {jobs.map(j => <div key={j.id}>{j.title}</div>)}
    </div>
  );
}

export default JobList;