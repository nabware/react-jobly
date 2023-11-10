import { useState } from "react";
import { Navigate } from "react-router-dom";
import Alert from "../common/Alert";
import { useContext } from "react";
import userContext from "../userContext";

/** Form to login user
 *
 * Props:
 * - login: login function
 *
 * State:
 * - formData: {username, password}
 * - alerts: [{text: "Success", type: "success"}, ...]
 *
 * Context:
 * - user
 */

function LoginForm({ login }) {
  console.log("Rendering LoginForm...");

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [alerts, setAlerts] = useState([]);
  const { user } = useContext(userContext);

  /** Takes DOM event and calls login function and handles errors. */

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await login(formData);

    } catch (errors) {
      setAlerts(errors.map(e => ({ text: e, type: "danger" })));
    }
  };

  /** Takes DOM event and sets formData state. */

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(prevData => {
      return { ...prevData, [name]: value };
    });
  }

  if (user) return <Navigate replace to="/" />;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          autoComplete="off"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange} />
        <button type="submit">Login</button>
      </form>

      {alerts.length > 0 && <Alert messages={alerts} />}

    </div>
  );
}

export default LoginForm;
