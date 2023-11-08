/**
 * Render job card with information
 *
 * Props:
 * - Job information {titile, company, salary, equity}
 *
 * {JobList, CompanyList } -> JobCard
 */
function JobCard({ title, company, salary, equity }) {

  return (
    <div>
      <div>{title}</div>
      {company && <div>{company}</div>}
      <div>Salary: {salary}</div>
      <div>Equity: {equity}</div>
    </div>
  );

}

export default JobCard;
