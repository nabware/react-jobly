import "./JobCard.css";

/**
 * Render job card with information
 *
 * Props:
 * - Job information {title, company, salary, equity}
 *
 * JobCardList -> JobCard
 */
function JobCard({ title, company, salary, equity }) {

  return (
    <div className="card">
      <div className="title">{title}</div>
      {company && <div>{company}</div>}
      <div>Salary: {salary}</div>
      <div>Equity: {equity}</div>
    </div>
  );

}

export default JobCard;
