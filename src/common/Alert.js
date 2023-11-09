/** Displays alert messages
 *
 * Props:
 * - messages: ["Invalid username", ...]
 * - className: "alert alert-danger"
 */

function Alert({ messages, className }) {
  return (
    <div className={className}>
      {messages.map((m, i) =>
        <div key={i} >{m}</div>)}
    </div>
  );
}

export default Alert;
