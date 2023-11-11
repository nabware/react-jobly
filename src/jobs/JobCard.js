import { useContext } from "react";
import userContext from "../userContext";

/**
 * Render job card with information
 *
 * Props:
 * - Job information {title, company, salary, equity}
 *
 * JobCardList -> JobCard
 */
function JobCard({ id, title, companyName, salary, equity }) {
  salary = new Intl.NumberFormat().format(salary);

  const { user, applyToJob } = useContext(userContext);
  const appliedTo = user.applications.has(id);

  function handleApplyToJob() {
    applyToJob(user.username, id);
  }

  return (
    <div className="card">
      <div className="title">{title}</div>
      {companyName && <div>{companyName}</div>}
      {salary && <div>Salary: {salary}</div>}
      {equity && <div>Equity: {equity}</div>}
      <button
        className="btn btn-danger mt-3"
        onClick={handleApplyToJob}
        style={{ width: "100px" }}
        disabled={appliedTo}>
        {appliedTo ? "Applied" : "Apply"}
      </button>
    </div>
  );

}

export default JobCard;
