/**
 * Render job card with information
 *
 * Props:
 * - Job information {title, company, salary, equity}
 *
 * JobCardList -> JobCard
 */
function JobCard({ title, companyName, salary, equity }) {
  salary = new Intl.NumberFormat().format(salary);

  return (
    <div className="card">
      <div className="title">{title}</div>
      {companyName && <div>{companyName}</div>}
      {salary && <div>Salary: {salary}</div>}
      {equity && <div>Equity: {equity}</div>}
    </div>
  );

}

export default JobCard;
