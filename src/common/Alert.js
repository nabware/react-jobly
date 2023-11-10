/** Displays alert messages
 *
 * Props:
 * - messages: [{text: "Invalid username", type: "danger"}, ...]
 */

function Alert({ messages }) {
  return (
    <div>
      {messages.map((m, i) =>
        <div key={i} className={`alert alert-${m.type}`}>{m.text}</div>)}
    </div>
  );
}

export default Alert;
