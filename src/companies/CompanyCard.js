import "./CompanyCard.css"

/** Displays company information
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ name, logoUrl, description }) {
  console.log("Rendering CompanyCard...");

  return (
    <div className="card">
      <div className="title">{name}<img src={logoUrl} /></div>
      <div>{description}</div>
    </div>
  );
}

export default CompanyCard;