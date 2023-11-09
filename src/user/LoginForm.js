import { useState } from "react";
import { redirect, Navigate } from "react-router-dom";
import Alert from "../common/Alert";
import { useContext } from "react";
import userContext from "../userContext";

/** Login user
 *
 * Props:
 * - login: login function
 *
 * State:
 * - formData: {username, password}
 */

function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState([]);
  const { token } = useContext(userContext);

  async function handleSubmit(evt) {
    evt.preventDefault();

    const errors = await login(formData);

    if (errors.length > 0) {
      setErrors(errors);
    }
  };

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevData => {
      return { ...prevData, [name]: value };
    });
  }

  if (token) return <Navigate replace to="/" />;

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
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange} />
        <button type="submit">Login</button>
      </form>

      <Alert messages={errors} className="alert alert-danger" />
    </div>
  );
}

export default LoginForm;
