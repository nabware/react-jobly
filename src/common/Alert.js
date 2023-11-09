/** Displays alert messages
 *
 * Props:
 * - messages: ["Invalid username", ...]
 * - className: "alert alert-danger"
 */

function Alert({messages, className}) {
  return (
  <div>
    {messages.map((m, i) =>
    <div key={i} className={className}>{m}</div>)}
  </div>
  );
}

export default Alert;